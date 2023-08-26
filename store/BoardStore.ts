import getTodosGroupedByColumn from "@/libs/TodosGroupedByColumn"
import { create } from "zustand";
import { Board,TypeColumns,Column, Todo } from "@/typing";
import { databases } from "@/appwrite";


interface BoardState{
    board: Board;
    getBoard:()=>void;
    setBoardState: (board:Board) => void;
    searchString : string;
   setSearchString : (searchString: string) => void;
   newTaskInput : string;
   setTaskInput :(input:string)=> void;
   newTaskType: TypeColumns;
   setTaskType:(columnId:TypeColumns)=> void;
//    updateTodoInDB :(todo : Todo , columnId : TypeColumns)=> void;
//   deleteTask :(taskIndex:number ,todoId : Todo ,id :TypeColumns) => void;
  
}
export const useBoardState = create<BoardState>((set)=>({

board:{
    columns: new Map<TypeColumns,Column>()
    
},
searchString:"",
setSearchString: (searchString) => set({searchString}),
newTaskInput:"",
setTaskInput: (input)=> set({newTaskInput:input}),
newTaskType: "todo",
setTaskType: (columnId:TypeColumns)=>({newTaskType : columnId}),



getBoard:async()=>{
   
    const board = await getTodosGroupedByColumn();
    set({board})
},
setBoardState:(board => set({board})),
//
// deleteTask : async(taskIndex:number,todo:Todo,id:TypeColumns)=>{
//     const newColumns = new Map(get().board.columns);
//     newColumns.get(id)?.todos.splice(taskIndex,1)
//     set({board:{columns: newColumns}})
//     if (todo.image){
//         await Storage.deletefile(todo.image,todo.image.fileId);
//     }
//     await databases.deleteDocument(
//         process.env.Next_PUBLIC_DATABASE_ID!,
//         process.env.Next_PUBLIC_TODOS_COLLECTION_ID!,
//         todo.$id
//     );
// }
  
//     updateTodoInDB :async(todo , columnId )=>{
   
//     const data = await databases.updateDocument(
//         process.env.Next_PUBLIC_DATABASE_ID!,
//         process.env.Next_PUBLIC_TODOS_COLLECTION_ID!,
//         todo.$id,{
//             title:todo.title,
//             status: columnId,
//         }
//     );
//     return data;
// },



}))

