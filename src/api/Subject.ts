import useAddMutation from "./helper/useAddMutation"
import useDeleteQuery from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateQuery from "./helper/useUpdateQuery";

export const API ={
    POST:"/subject",
    GET:"/subject",
    UPDATE:"",
    DELETE:""

}
const KEY = "subject"
export const useGetSubject = (param?:any,option?:any) => useGetQuery(KEY ,  API.GET ,param ,option);
export const useAddSubject = (param?:any) => useAddMutation(KEY ,  API.POST );
export const useUpdateSubject = (param?:any) => useUpdateQuery(KEY ,  API.UPDATE );

export const useDeleteSubject = (param?:any) => useDeleteQuery(KEY ,  API.DELETE );

