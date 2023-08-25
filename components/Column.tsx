import React from 'react'; 
import { Draggable, Droppable } from '@hello-pangea/dnd';
import TodoCard from './TodoCard'; 
import { FaPlusCircle } from 'react-icons/fa';
import { Todo,TypeColumns } from '@/typing';
import { useBoardState } from '@/store/BoardStore';

type Props = {
  id: TypeColumns;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypeColumns]: string; 
} = {
  todo: "To Do", 
  inprogress: "In Progress",
  done: "Done",
};

function Columns({ id, todos, index }: Props) {
  const [searchString] = useBoardState((state) => [
    state.searchString
  ])
 
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId='board' direction="horizontal" type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className="flex justify-between font-bold text-2xl p-2">
                  {idToColumnText[id]}
                  <span className="text-gray-700 bg-gray-200 rounded-full px-1 py-2 text-sm font-normal">
                    {!searchString ? todos.length : todos.filter((todo) => todo.title.toLowerCase()).length}
                  </span>
                </h2>
                
                <div className='space-y-2'>
  {todos.map((todo, index) => {
    if(searchString && !todo.title.toLowerCase().includes(searchString.toLowerCase())) return null;
    return(
      <Draggable
      key={todo.$id}
      draggableId={todo.$id}
      index={index}
    >
      {(provided) => (
        <TodoCard
          todo={todo}
          index={index}
          id= {id} 
          innerRef={provided.innerRef}
          draggableProps={provided.draggableProps}
          dragHandleProps={provided.dragHandleProps}
        />
      )}
    </Draggable>
    )
      })}
       {provided.placeholder}
  <div className='flex items-end justify-end p-2'><button className='text-green-500 hover:text-green-800'><FaPlusCircle className='w-10 h-10'/></button></div>
</div>
               
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Columns; 