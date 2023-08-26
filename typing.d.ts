import { Models } from "appwrite"


interface Board{
    columns : Map<TypeColumns,columns>

}
type TypeColumns = "todo"| "inprogress"|"done"

interface Column{
    id : TypeColumns
    todos: Todo[]

}
interface Todo {
    $id : string,
    $createdAt : string,
    title : string,
      status: TypeColumns,
      image? : string
}
interface image{
    bucketId : string,
    fileId :string,
}
