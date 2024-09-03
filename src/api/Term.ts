import useAddMutation from "./helper/useAddMutation"
import useDeleteQuery from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateQuery from "./helper/useUpdateQuery";

export const API ={
    POST:"/term",
    GET:"/term",
    UPDATE:"",
    DELETE:""

}
const KEY = "term"
export const useGetTerm = (param?:any,option?:any) => useGetQuery(KEY ,  API.GET ,param ,option);
export const useAddTerm = (param?:any) => useAddMutation(KEY ,  API.POST );
export const useUpdateTerm = (param?:any) => useUpdateQuery(KEY ,  API.UPDATE );

export const useDeleteTerm = (param?:any) => useDeleteQuery(KEY ,  API.DELETE );

