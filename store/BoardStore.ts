import getTodosGroupedByColumn from "@/libs/TodosGroupedByColumn"
import { create } from "zustand";
import { Board,TypeColumns,columns } from "@/typing";

interface BoardState{
    board: Board;
    getBoard:()=>void;
}
export const useBoardState = create<BoardState>((set)=>({
board:{
    columns: new Map<TypeColumns,columns>()
},
getBoard:async()=>{
    const board = await getTodosGroupedByColumn();
    return board;
}
}))