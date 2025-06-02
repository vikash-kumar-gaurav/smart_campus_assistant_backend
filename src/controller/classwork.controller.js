import ClassWork from "../models/classword.model.js";
import User from '../models/user.models.js'

//create a new classwork instance and extract email from token from middleware then searcch user in mongoDb using email extract its _id and used as posted by got it
export async function createClassworkController(req,res) {
    const { title, description,department, semester }  = req.body
    const role = req.userData?.role
    const email = req.userData?.email
    const imageUrl = req.cloudinaryUrls

    try {
        if(!role === "admin" && !role === "faculty"){
            return res.status(403).json({
                msg:"buddy you are not authorized to make classwork so please leave it don't waste time",
                success:false
            })
        }
        
        if(!title || !Array.isArray(imageUrl) || !department || !semester ){
            return res.status(409).json({
                msg:"Please fill all the details",
                success:false
            })
        }

        const user = await User.findOne({ email }).lean();
        const userId = user?._id;
        const classwork = await ClassWork.create({
            description: description || null,
            title,
            imageUrl,
            department,
            semester:parseInt(semester),
            posted_by:userId 
        })

        return res.status(201).json({
            msg:"Created a classwork",
            success:true,
            classwork
        })

    } catch (error) {
        console.log(`error from createClassworkController ${error}`);
        return res.status(500).json({
            success:false,
            msg:"Server error try later"
        })
        
    }
}

//get you class assignments
export async function getclassWorkController(req,res) {
    const { department, semester } = req.query
    
    
    console.log("department",department,"semester",semester);
    
    if(!department || !semester ){
        return res.status(500).json({
            msg:"Please fill all details i.e department and semester",
            success:false
        })
    } 
    
    try {
        const allworks = await ClassWork.find({semester, department}).sort({ createdAt: -1 }).lean();
        console.log(allworks);
        
        return res.status(200).json({
            msg:"Your classwork is here",
            success:true,
            classworks: allworks
        })
    } catch (error) {
        console.log(`error from getclassWorkController ${error}`)
        return res.status(500).json({
            msg:"Server Error try later",
            success:false
        })
        
    }
}

//get the created classwork by the teacher or the faculty
export async function myClassworkController(req,res) {
    const userId = req.userData.UserMongoId
    try {
        const classworks = await ClassWork.find({posted_by:userId})
        .sort({createdAt:-1})
        .select("-posted_by -_id -createdAt -updatedAt -__v")
        .lean()
        return res.status(200).json({
            msg:"you classwork",
            success:true,
            classworks
        })
    } catch (error) {
        console.log("error from myClassworkController", error.message || error);
        return res.status(500).json({
            msg:"Server Error try later",
            success:false
        })
        
    }
}

//admin can see all the classwork here that is uploaded by the faculty
export async function getAllClassworkController(req,res) {
    const role = req.userData.role
    try {
        if(role !== "admin"){
         return res.status(401).json({
            msg:"you are not authorized to access this route",
            success:false
         })   

        }

        const classworks = await ClassWork.find()
        .populate("posted_by", "name profile_pic")
        .sort({createdAt:-1})
        .select(" -updatedAt -__v ")
        .lean()

        return res.status(200).json({
            classworks,
            success:true,
            classworks
        })


    } catch (error) {
        console.log("error from getAllClassworkController",error.message|| error);
        
        return res.status(500).json({
            msg:"Server Error",
            success:false
        })
    }
}
