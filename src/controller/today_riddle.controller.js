import Riddle from "../models/today_riddle.model.js";

//create a new riddle 
export async function createRiddleController(req,res) {
    const { question, options, correct_answer, explanation}   = req.body
    const userId = req.userData.UserMongoId
    const role = req.userData.role
    
    
    
    try {

        if(role !== "admin" && role !=="faculty"){
            return res.status(403).json({
                msg:"Only admin or faculty can create riddle",
                success:false
            })
        }
        if(!question ||!Array.isArray(options) ||!correct_answer ){
            return res.status(409).json({
                msg:"Please fill all details",
                success:false
            })
        }

        

        await Riddle.create({
            question,
            options,
            correct_answer,
            explanation,
            posted_by:userId
        })

        return res.status(201).json({
            msg:"riddle created",
            success:true
        })
    } catch (error) {
        console.log(`error from createRiddleController ${error}`);
        return res.status(500).json({
            success:false,
            msg:"Server error try later"
        })
        
    }  
}


//see all riddle of the day
export async function seeTodayRiddleController(req,res) {
    try {
        const riddles = await Riddle.find().populate('posted_by', 'name')
        return res.status(200).json({
            success:true,
            riddles
        })
    } catch (error) {
        console.log(`error from seeTodayRiddleController ${error}`);
        return res.status(500).json({
            success:false,
            msg:"Server error try later"
        })
        
    }    
}