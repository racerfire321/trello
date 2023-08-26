import { Board, TypeColumns, Todo } from '@/typing';


const formatTodoForAI = (board: Board) => {
  const todos = Array.from(board.columns.entries())

  
  const flatArray = todos.reduce((map, [key, value]) => {
    map[key] = value.todos;
    return map;
  }, {} as { [key in TypeColumns]: Todo[] });

  
  const flatArrayCounted = Object.entries(flatArray).reduce((map, [key, value]) => {
    map[key as TypeColumns] = value.length;
    return map;
  }, {} as { [key in TypeColumns]: number });
   console.log(flatArrayCounted)
  return flatArrayCounted;
};

export default formatTodoForAI;
