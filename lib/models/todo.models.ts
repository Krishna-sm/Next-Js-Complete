import mongoose from 'mongoose'
const Schema= new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        isComplete:{
            type:Boolean,
            default:false
        }
},{
    timestamps: true 
})


export const TodoModel =   mongoose.models.todomodel ||  mongoose.model("todomodel",Schema);