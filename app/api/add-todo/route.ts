import { ConnectDB } from '@/lib/config/db.config';
import { TodoModel } from '@/lib/models/todo.models';
import {NextRequest,NextResponse} from 'next/server';


ConnectDB()

export const GET = async(request:NextRequest)=>{

    try{
        
     const todos= await TodoModel.find({});
        return NextResponse.json({todos,total:todos.length})

    }catch(e:any){
        return NextResponse.json({error:e.message})
    }

}

export const POST = async(request:NextRequest)=>{

    try{
      const {title,desc} = await request.json();
      // create document

      await TodoModel.create({
        title,desc
      })

      return NextResponse.json({msg:"Todo Added"})

    }catch(e:any){
        return NextResponse.json({error:e.message})
    }

}