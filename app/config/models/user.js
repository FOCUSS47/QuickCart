import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchemna=new mongoose.Schema({
    _id:{type: String,required:true},
    _name:{type:String, required:true},
    _email:{type:String, required:true,unique:true},
    imageUrl:{type:String, required:true},
    cartItems:{type:Object,default:{ }}
},{minimize:false})

const User = mongoose.models.user || mongoose.model('user',userSchemna)

export default User