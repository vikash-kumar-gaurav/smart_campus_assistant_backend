import mongoose from 'mongoose'

const qualificationSchema = new mongoose.Schema({
    matric:{
        type:string
    }
},{
    timestamps:true
})