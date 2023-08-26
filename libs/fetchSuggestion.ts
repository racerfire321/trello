import { Board } from "@/typing";
import formatTodoForAI from "./formatTodoForAI";
const fetchSuggestion =async (board:Board) => {
    const todos = formatTodoForAI(board);
   
    const res = await fetch("/api/generateSumary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todos }),
      });
      
      if (res.ok) {
        try {
          const data = await res.json();
          const { content } = data;
          return content;
        } catch (error) {
          console.error("Error parsing JSON:", error); }
      } else {
        console.error("HTTP Error:", res.status);
       
      }

}
export default fetchSuggestion;