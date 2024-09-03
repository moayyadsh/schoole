import useAddMutation from "./helper/useAddMutation"
import useDeleteQuery from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateQuery from "./helper/useUpdateQuery";

export const API ={
    POST:"/cycle",
    GET:"/cycle",
    UPDATE:"/cycle",
    DELETE:"/cycle"

}
const KEY = "cycle"
export const useGetCycle = (param?:any,option?:any) => useGetQuery(KEY ,  API.GET ,param ,option);
export const useAddCycle = (param?:any) => useAddMutation(KEY ,  API.POST );
export const useUpdateCycle = (param?:any) => useUpdateQuery(KEY ,  API.UPDATE );

export const useDeleteCycle = (param?:any) => useDeleteQuery(KEY ,  API.DELETE );

