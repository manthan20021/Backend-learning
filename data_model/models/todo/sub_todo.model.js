import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
content:{
    type: String,
    require:true,
},
complete:{
    type:Boolean,
    default:false
},
createBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
},{timestamps: true})

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)