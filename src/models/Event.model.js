import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    date:{type:Date,required:true},
    image_url: [
        {
          URL: { type: String },
          public_id: { type: String },
        }
      ],
      
    venue:{type:String,required:true,trim:true},
    posted_by:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
},{
    timestamps:true
})

const Event = mongoose.model('Event',eventSchema)
export default Event;