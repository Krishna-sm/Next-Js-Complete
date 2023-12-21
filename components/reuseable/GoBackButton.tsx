"use client";
import { useRouter } from 'next/navigation'

const GoBackButton = ({...props}:any)=>{

    const router = useRouter()
    return <button  onClick={() => router.back()} {...props} ></button>
}

export default GoBackButton