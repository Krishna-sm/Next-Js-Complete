import axios from 'axios'
import GoBackButton from '@/components/reuseable/GoBackButton'
const SingleTodo = async(props:any)=>{


    const {data:{todo}} =  await axios.get(`http://localhost:3000/api/mutations-todo/${props?.params?.slug}`)

    return <>
            <div className="flex justify-center items-center min-h-screen">
                        <div className="w-1/2 border p-5">
                            
                        <div className="py-2 mb-3 border-b-black border-b-2">
                        <h1 className="font-bold ">Todo For : {props?.params?.slug}</h1>
                        </div>
                        <div className="py-2 mb-3 border-b-black border-b-2">
                        <h1 className="font-bold ">Title :{todo.title}</h1>
                        <h1 className="font-bold ">Desc : {todo.desc}</h1>
                        <h1 className="font-bold ">Complete : {todo.isComplete? 'complete':"un complete"}</h1>
                        </div>
                                
                        <div className="py-2 mb-3 ">
                        <GoBackButton  className="px-4 py-2 bg-black text-white disabled:bg-gray-600">Go Back</GoBackButton>
                        </div>
                        </div>
            </div>
    </>
}

export default SingleTodo;