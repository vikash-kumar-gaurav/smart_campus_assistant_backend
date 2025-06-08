import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"name is required"],
        trim: true,
        
    },
    role:{
        type:String,
        enum:["faculty","student","admin"],
        required:[true,"role is required"],
        default:"student"
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        trim:true
    },
    collegeId:{
        type:String,
        
    },
    roll_no:{
        type:String,
        
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    profile_pic:{
        type:String,
        trim:true
    }



},{
    timestamps:true
})

const User = mongoose.model("User",userSchema)
export default User;