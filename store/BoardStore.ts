import getTodosGroupedByColumn from "@/libs/TodosGroupedByColumn"
import { create } from "zustand";
import { Board,TypeColumns,Column } from "@/typing";

interface BoardState{
    board: Board;
    getBoard:()=>void;
    setBoardState: (board:Board) => void;
    searchString : string;
   setSearchString : (searchString: string) => void;
}

export const useBoardState = create<BoardState>((set)=>({

board:{
    columns: new Map<TypeColumns,Column>()
    
},
searchString:"",
setSearchString: (searchString) => set({searchString}),

getBoard:async()=>{
   
    const board = await getTodosGroupedByColumn();
    set({board})
},
setBoardState:(board => set({board}))



}))

