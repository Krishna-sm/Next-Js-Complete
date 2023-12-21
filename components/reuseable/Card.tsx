import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import Button from "@/components/reuseable/Button";
import Link from 'next/link'


import {DeleteTodoAction,updateTodoAction} from '@/actions/AddTodoAction'; 
const Card = (props:any)=>{


  


    return<>
   <tr>
      <td className="border-2" >{props.id}</td>
      <td className="border-2" >{props.title}</td>
      <td className="border-2" >{props.desc}</td>
      <td className="border-2" >
                {
                    props.isComplete === true?    <FcCheckmark/>:
                    <FcCancel/>
                }
      </td>
      <td className="border-2" >
   
      <Button mutatation={DeleteTodoAction} id={props._id} msg={"todo Deleted"} className="px-4 py-2 bg-red-500 text-white mx-2">Delete</Button>
    {
         props.isComplete !== true  && <Button mutatation={updateTodoAction} id={props._id} msg={"todo Updated"} className="px-4 py-2 bg-yellow-600 text-white mx-2">Update</Button>
    }
       <Link href={`/todos/${props._id}`} className="px-4 py-2 bg-purple-500 text-white mx-2">View</Link>
      </td>
                
     
    </tr>
    </>
}

export default Card;