import mongoose from "mongoose";

const taskSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:
    {
        type:String,
        required:true
    },
    username:
    {
        type:String,
        required:true
    },
    createDate:{
        type:Date
    }
});

const Task=mongoose.model('task',taskSchema);
export default Task;

