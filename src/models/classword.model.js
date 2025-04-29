import mongoose from "mongoose";

const classWorkSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    imageUrl:[{
        URL:{type:String},
        public_id:{type:String}
    }],
    posted_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    department:{
        type:String,
        required:true,
        trim:true
    },
    semester:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const ClassWork = mongoose.model("ClassworkWork",classWorkSchema)
export default ClassWork;