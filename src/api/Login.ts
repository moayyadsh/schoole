import useAddMutation from "./helper/useAddMutation"
import useGetQuery from "./helper/useGetQuery";

export const API ={
    POST:"/login",

}
const KEY = "Login"
export const useLogin=()=>useAddMutation(KEY , API.POST);

