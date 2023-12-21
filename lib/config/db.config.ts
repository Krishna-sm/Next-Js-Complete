import mongoose, { mongo } from 'mongoose';

export const ConnectDB = async()=>{
    try {
                await mongoose.connect("mongodb://localhost/todoappnextjs")

                console.log(`the db is connect with ${mongoose.connection.host}`);
                

    } catch (error) {
        mongoose.disconnect()
        process.exit(1)
    }
}

