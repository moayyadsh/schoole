import {create} from 'zustand'

interface ModalState{
    isOpenAdd:boolean,
    isOpenEdite:boolean,
    toggleModalAdd:()=>void,
    toggleModalEdit:()=>void
}

 const useModalState= create<ModalState>((set)=>({
  isOpenAdd:false,
  isOpenEdite:false,
  toggleModalAdd: () => set((state) => ({ isOpenAdd: !state.isOpenAdd })),
  toggleModalEdit: ()=>set((state)=>({  isOpenEdite: !state.isOpenEdite}))

  }))

export default useModalState        ;
