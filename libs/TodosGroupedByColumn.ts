import { databases } from "@/appwrite";
import { Board, TypeColumns,Column } from "@/typing";

const getTodosGroupedByColumn = async () => {
  try {
    const data = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION!
    );

    const todos = data.documents;
    
    const column = todos.reduce((acc, todo) => {
      if (!acc.has(todo.status)) {
        acc.set(todo.status, {
          id: todo.status,
          todos: [],
        });
      }
      acc.get(todo.status)!.todos.push({
        $id: todo.$id,
        $createdAt: todo.$createdAt,
        title: todo.title,
        status: todo.status,
        ...(todo.image && { image: JSON.parse(todo.image) }),
      });
      return acc;
    }, new Map<TypeColumns, Column>());

    const ColumnType: TypeColumns[] = ["todo", "inprogress", "done"];
    for (const columnType of ColumnType) {
      if (!column.get(columnType)) {
        column.set(columnType, {
          id: columnType,
          todos: [],
        });
      }
    }
       
    // Sort the columns based on the predefined order
    const sortedColumns = new Map(
      Array.from(column.entries()).sort((a, b) => {
        return ColumnType.indexOf(a[0]) - ColumnType.indexOf(b[0]);
      })
    );
    
    const board: Board = {
      columns: sortedColumns,
    };
   return board;
   
  } catch (error) {
    console.error("Error fetching, grouping, and sorting todos:", error);
    throw error;
  }

};

export default getTodosGroupedByColumn;
