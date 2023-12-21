import { ConnectDB } from '@/lib/config/db.config';
import { TodoModel } from '@/lib/models/todo.models';
import {NextRequest,NextResponse} from 'next/server';


ConnectDB()

export const GET = async(request:NextRequest,ctx:any)=>{


    try{
        
     const todo= await TodoModel.findById(ctx?.params?.id);
  
        return NextResponse.json({todo,msg:"todo fetched"})

    }catch(e:any){
        return NextResponse.json({error:e.message})
    }

}
export const DELETE = async(request:NextRequest,ctx:any)=>{


    try{
        
     const dlt= await TodoModel.findByIdAndDelete(ctx?.params?.id);
  
        return NextResponse.json({msg:"todo delete successfully"})

    }catch(e:any){
        return NextResponse.json({error:e.message})
    }

}
export const PUT = async(request:NextRequest,ctx:any)=>{


    try{
        
     const dlt= await TodoModel.findByIdAndUpdate(ctx?.params?.id,{
        $set:{
            isComplete:true
        }
     });

     console.log({dlt})
     
        return NextResponse.json({msg:"todo Update successfully"})

    }catch(e:any){
        return NextResponse.json({error:e.message})
    }

}


// export const POST = async(request:NextRequest)=>{

//     try{
//       const {title,desc} = await request.json();
//       // create document

//       await TodoModel.create({
//         title,desc
//       })

//       return NextResponse.json({msg:"Todo Added"})

//     }catch(e:any){
//         return NextResponse.json({error:e.message})
//     }

// }