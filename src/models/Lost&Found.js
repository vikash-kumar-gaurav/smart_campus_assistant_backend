import mongoose from 'mongoose'

const lostFoundSchema = new mongoose.Schema({
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    ItemName:{
        type:String,
        required:true,
        trim:true
    },
    contact:{
        type:String,
        required:true,
        trim:true
    },
    Detail:{
        type:String,
        required:true,
        trim:true
    },
    Items_image:[{
        URL:{type:String, trim:true},
        public_id:{type:String, trim:true}
    }],
    category:{
        type:String,
        enum:["Lost","Found"],
        required:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})

const Lostfound = new mongoose.model('Lostfound', lostFoundSchema)
export default Lostfound