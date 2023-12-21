
"use server";
import { revalidateTag } from 'next/cache'
export const AddTodoAction =async (form)=>{
 await fetch('http://localhost:3000/api/add-todo',{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
         'content-type':'application/json'
        }
     })
     revalidateTag("todos");
}

export const DeleteTodoAction =async (id)=>{

   await fetch(`http://localhost:3000/api/mutations-todo/${id}`,{
          method:'DELETE',
          headers:{
           'content-type':'application/json'
          }
       })
       revalidateTag("todos");
  }


  export const updateTodoAction =async (id)=>{

   await fetch(`http://localhost:3000/api/mutations-todo/${id}`,{
          method:'PUT',
          headers:{
           'content-type':'application/json'
          }
       })
       revalidateTag("todos");
  }