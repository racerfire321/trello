import { create } from "zustand";

interface ModalStore{
    isOpen : boolean;
    openModel : ()=>void;
    closeModel: ()=>void;
}
export const useModalStore = create<ModalStore>()((set)=>({
    isOpen : false,
    openModel : () => set({isOpen : true}),
    closeModel : () => set({isOpen: false}),
}));