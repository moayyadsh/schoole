import useAddMutation from "./helper/useAddMutation"
import useDeleteQuery from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateQuery from "./helper/useUpdateQuery";

export const API ={
    POST:"/branch",
    GET:"/branch",
    UPDATE:"",
    DELETE:""

}
const KEY = "branch"
export const useGetbranch = (param?:any,option?:any) => useGetQuery(KEY ,  API.GET ,param,option );
export const useAddBranch = (param?:any) => useAddMutation(KEY ,  API.POST );
export const useUpdateBranch = (param?:any) => useUpdateQuery(KEY ,  API.UPDATE );

export const useDeleteBranch = (param?:any) => useDeleteQuery(KEY ,  API.DELETE );

