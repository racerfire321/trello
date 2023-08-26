"use client"
import { Todo,TypeColumns } from '@/typing';
import React from 'react';
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from '@hello-pangea/dnd';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { useBoardState } from '@/store/BoardStore';


type Props={
  todo: Todo;
  index: number;
  id: TypeColumns;
  innerRef: (element: HTMLElement | null ) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps |null | undefined;
};

function TodoCard({
  todo,
  index,
  id ,
  innerRef,
  draggableProps,
  dragHandleProps,
}:Props){
// const deleteTask = useBoardState((state) => state.deleteTask);
{
  return (
    <div className="bg-white rounded-md" ref={innerRef} {...draggableProps} {...dragHandleProps} >
      <div className='flex justify-between items-center p-5'>
        <p>{todo.title}</p>
        <button className= 'text-red-500 hover:text-red-700' >
          <XCircleIcon className='ml-5 h-8 w-8'/>
        </button>
      </div>
      
      
    </div>
  );
};
}
export default TodoCard;
