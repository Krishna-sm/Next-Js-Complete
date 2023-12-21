"use client";
import { ChangeEvent, FormEvent, useState , useTransition} from "react"
import {toast} from 'react-toastify'
import axios from 'axios'
import {AddTodoAction} from '@/actions/AddTodoAction'; 

const AddTodo= ()=>{
   
    const [isPending,transitonfun] = useTransition()

  const [form,setForm] = useState({
    title:'',
    desc:""
  })

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }


  const OnSubmitHandler = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try {

        
      if(!form.title  || !form.desc){
        toast.error("All Fields are required");
        return 
      }

    //   const {data} = await axios.post("/api/add-todo",form);
    //       console.log({data});

    transitonfun(async()=> await AddTodoAction(form));
          
      toast.success("Todo Added");
    setForm({  title:'',
    desc:""
  })

            
    } catch (error:any) {
      toast.error("error is comming "+error.message);
          
    }
  }

  return (
<>
 
              <form onSubmit={OnSubmitHandler} className="w-1/2 mx-auto py-5">
                <div className="mb-3">
                  <label htmlFor="title">Title</label>
                  <input type="text" name="title" className="w-full  py-2 px-4 outline-none ring-[1px] ring-black" onChange={onChangeHandler}  value={form.title} placeholder="Enter Title"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="desc">Description</label>
                  <textarea rows={5} name="desc" className="w-full  py-2 px-4 outline-none ring-[1px] ring-black" onChange={onChangeHandler} value={form.desc}  placeholder="Enter Description"/>
                </div>
                <div className="mb-3">
                  <button disabled={isPending} className="px-4 py-2 bg-black text-white disabled:bg-gray-600">Add Todo</button>
                </div>
              </form>


</>
  )
}
export default AddTodo