import { QueryClient, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { baseURL } from '../../config/axios';
function useAddMutation(
  key: string,
  url: string,
) {

  const queryClient = useQueryClient()
 return useMutation( 
  async (dataToSend:any) => {
    console.log(dataToSend,"dataToSend");
    
    const { data } = await axios.post(baseURL+url , dataToSend,{
      headers:{
        Authorization:'Bearer '+localStorage.getItem('token'),
         "x-cycle-id": 1,
         "x-branch-id": 1,
         "x-term-id": 1,
      }
    });
    return data;
  },
{
  onSuccess(data) {
    console.log(data);
    queryClient.invalidateQueries([key])
  },

}
)
}

export default useAddMutation;