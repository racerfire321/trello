import { databases } from "@/appwrite";

const getTodosGroupedByColumn = async() => {
const data = await  databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTION!,

)
console.log(data);
}

export default getTodosGroupedByColumn