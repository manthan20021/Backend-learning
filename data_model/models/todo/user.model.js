import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({

    userName:{
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    email:{
        type:String,
        require: true,
        lowercase:true,
        unique:true
    },
    password:{
        type: String,
        require: true,
    }


},{timestamps: true})

export const User = mongoose.model("User", userSchema)