import mongoose from "mongoose";

const suggestion_Schema = new mongoose.Schema({
    compliant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    imageUrl:[{
        URL:{type:String},
        public_id:{type:String}
    }],
    category:{
        type:String,
        enum:["complain","suggestion"],
        required:true
    },
    complain_suggestion:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        enum:["Solved","unSolved"],
        default:"unSolved"
    }
},{
    timestamps:true
})

const Suggestion = new mongoose.model("Suggestion",suggestion_Schema)
export default Suggestion;