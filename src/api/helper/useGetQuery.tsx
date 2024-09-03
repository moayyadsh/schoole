import { useQuery } from 'react-query';
import axios from 'axios';
import { baseURL } from '../../config/axios';


function useGetQuery(
  KEY: string ,
  url: string,
  params: Record<string, any> = {},
  options: Record<string, any> = {},
) {

  return useQuery({
    queryKey: [KEY,params], 
    queryFn: async () => {
      const response = await axios.get(
         baseURL+ url, { 
        headers:{
          // "Content-Type":"application/json",
          Authorization:'Bearer '+localStorage.getItem('token'),

        },
        params,
      
       },
       
      );
      return response?.data ?? [];
    },
      ...options
    
    
  }
);
}

export default useGetQuery;