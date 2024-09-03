import useAddMutation from "./helper/useAddMutation"
import useDeleteQuery from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateQuery from "./helper/useUpdateQuery";

export const API ={
    POST:"/teacher",
    GET:"/teacher",
    UPDATE:"",
    DELETE:""

}
const KEY = "teacher"
export const useGetTeacher = (param?:any,option?:any) => useGetQuery(KEY ,  API.GET ,param ,option);
export const useAddTeacher = (param?:any) => useAddMutation(KEY ,  API.POST );
export const useUpdateTeacher = (param?:any) => useUpdateQuery(KEY ,  API.UPDATE );

export const useDeleteTeacher = (param?:any) => useDeleteQuery(KEY ,  API.DELETE );

