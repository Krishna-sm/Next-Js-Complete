"use client";
import {toast} from 'react-toastify'
import { useTransition} from "react"

const Button = ({mutatation,id,msg,...props}:any)=>{
const [ispending,fun] = useTransition()
    const onClickHandler = ()=>{
            try{
                fun(async()=>mutatation(id))
                toast.success(msg)
            }catch(e:any){
                    toast.error(e.message)
            }
    }

    return <button onClick={onClickHandler} disabled={ispending} {...props} ></button>
}

export default Button