import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
    subject:{
        type:String,
        required:[true,"please provide the subject/paper of the question"],
        trim:true
    },
    year:{
        type:Number,
        required:[true,"please provide the year of the question"],


    },
    semester:{
        type:Number,
        required:true
    },
    fileURL:{
        type:String,
        required:[true, "please attach the file"],
        trim:true
    },
    department:{
        type:String,
        enum:["BCA","BSC-IT","BBM","MCA","MBA"],
        require:[true,"please input the courese this file for"]
    },
    posted_by:{
        type:mongoose.Schema.Types.ObjectId,
        rel:"User"
    }

},{
    timestamps:true
})

const Question = mongoose.model("Question",questionSchema)

export default Question;