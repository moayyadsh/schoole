import useAddMutation from "./helper/useAddMutation"
import useDeleteQuery from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateQuery from "./helper/useUpdateQuery";

export const API ={
    POST:"/homework",
    GET:"/homework",
    UPDATE:"",
    DELETE:""

}
const KEY = "homework"
export const useGetHomework = (param?:any,option?:any) => useGetQuery(KEY ,  API.GET ,param ,option);
export const useAddHomework = (param?:any) => useAddMutation(KEY ,  API.POST );
export const useUpdateHomework = (param?:any) => useUpdateQuery(KEY ,  API.UPDATE );

export const useDeleteHomework = (param?:any) => useDeleteQuery(KEY ,  API.DELETE );

