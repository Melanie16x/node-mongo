import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    lastname:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    pass:{
        type:String,
        required:true,
    },state:{
        type:Boolean,
        default:true,
    }
},{
    timestamps:true
});

const User = model('User',userSchema);
export default User;