import { type } from "os"

interface Board{
    columns : Map<TypeColumns,columns>

}
type TypeColumns = "todo"| "inprogress"|"done"

interface columns{
    ids : TypeColumns
    todos: Todo[]

}
interface Todo{
    $id : string,
    $createdAt : string,
    title : string,
      status: TypeColumns,
      image? : Images
}
interface Images{
    bucketId : string,
    fileId :string,
}