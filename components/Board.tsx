"use client"
import React, { useEffect } from 'react';
import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd'; 
import { useBoardState } from '@/store/BoardStore';
import { Column } from '@/typing';
import Columns from './Column';





const Board = () => {
  const [board, getBoard,setBoardState] = useBoardState((state) => [
    state.board,
    state.getBoard,
    state.setBoardState
  ]);
  const handleOnDragEnd = (result: DropResult) => {
    const {destination,source,type}=result;
    if(!destination)return;
    if(type === "column"){
     const entries = Array.from(board.columns.entries());
     console.log(entries);
     const [removed] = entries.splice(source.index,1);
     entries.splice(destination.index,0,removed);
     const rearrangedColumns = new Map(entries)
     setBoardState({
       ...board,
       columns: rearrangedColumns
     })

    }
   
    const column = Array.from(board.columns);
    console.log(column)
    const startColIndex = column[Number(source.droppableId)];
    const  finalColIndex = column[Number(destination.droppableId)];
  
    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1],
    };
    const finalCol : Column ={
      id: finalColIndex[0],
      todos: finalColIndex[1].todos,
    };
    console.log(startCol,finalCol)
    if(!startCol || !finalCol)return;

    if(source.index === destination.index && startCol === finalCol) return;

    const newTodos = startCol.todos;
    const [todomoved] = newTodos.splice(source.index,1);
    if(startCol.id === finalCol.id){
      newTodos.splice(destination.index,0,todomoved)
      const newCol = {
        id : startCol.id,
        todos : newTodos
      }
      const newColumns = new Map(board.columns)
      newColumns.set(startCol.id,newCol)
      setBoardState({...board,columns:newColumns});
    }
    else{
  const finalTodos = Array.from(finalCol.todos);
   finalTodos.splice(destination.index,0,todomoved);

   const newColumns = new Map(board.columns);
   const newCol = {
    id :startCol.id,
    todos : newTodos
   }
   newColumns.set(startCol.id,newCol);
   newColumns.set(finalCol.id,{
    id : finalCol.id,
    todos: finalTodos
   });
    }
   };

   
  useEffect(() => {
    getBoard();
  }, [getBoard]);
  
  return (
    <>
      
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='board' direction="horizontal" type="column"  >
          {(provided) => (
            <div
              className="grid grid-cols-1 gap-5 md:grid-cols-3 max-w-7xl mx-auto"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Array.from(board.columns.entries()).map(([id, column], index) => (
                <Columns key={id} id={id} todos={column.todos} index={index} />
              
              ))}
               {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Board;
