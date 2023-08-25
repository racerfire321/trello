import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const {todos} = await request.json();
    console.log(todos);
    //communicate wioth ai
    const response = await openai.chat.completions.create({
       
        messages:[
            {
                role:"system",
                content: `When responding ,welcome the user always as Dear User and say welcome to trello demo App!Limit the response to 200 character`
            },
            {
                role: "user",
                content: `Hi there,provide a summary of the following todos .Count how many todos are in each category such as todo,inprogress and done ,then tell the user to have productive day ! .Here the data: ${JSON.stringify(todos)}`,
            }
        ],
         model: "gpt-3.5-turbo",
        
    });
     
     const data = response;
     console.log("Data is ",data);
     console.log(data.choices[0].message);
     return NextResponse.json(data.choices[0].message);
    
}