import mongoose from 'mongoose'

const riddleSchema = new mongoose.Schema({
    question:{
        type:String,
        trim:true,
        required:true,
    },
    options:[
        {
            type:String
        }

    ],
    correct_answer:{
        type:String,
        required:true,
        trim:true
    },
    explanation:{
        type:String
    },
    posted_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

},{timestamps:true})

const Riddle = mongoose.model("Riddle",riddleSchema)
export default Riddle