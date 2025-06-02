import Suggestion from "../models/complain_suggestion.model.js";
import User from "../models/user.models.js";
import { v2 as cloudinary } from 'cloudinary';

//create a new suggestion or complain
export async function createSuggestionController(req,res) {
    const { complain_suggestion, category } = req.body
    
    const email = req.userData?.email
    const userId = req.userData?.UserMongoId
    const images_URI = req.cloudinaryUrls ||  []
    
    
    try {
        
        if(!Array.isArray(images_URI) || !complain_suggestion || !category){
            return res.status(409).json({
                msg:"All fields are required",
                success:false
            })
        }

        
        const result = await Suggestion.create({
            imageUrl:images_URI ,
            complain_suggestion,
            compliant:userId,
            category
        }) 

        return res.status(201).json({
            msg:"Your suggestion or complaint is recordered we will work on it",
            success:true,
            result
        })
    } catch (error) {
        console.log(`error from createSuggestionController ${error}`);
        return res.status(500).json({
            msg:"Server error try again later",
            success:false
        })
        
    }
}


// view all complain or suggestion by the teaacher or faculty
export async function getAllComplain_SuggestionController(req,res) {
    const role = req.userData.role
    if(role !== "admin" && role !== "faculty"){
        return res.status(403).json({
            msg:"You are not authorized to access others complains or suggestion",
            success:false
        })
    }
    try {
        const complain_suggestion = await Suggestion.find().lean().select("-_id -compliant -createdAt -updatedAt -__v")
        return res.status(200).json({
            msg:"All suggestion and complain is ...",
            success:true,
            complain_suggestion
        })
    } catch (error) {
        console.log("error from getAllComplain_SuggestionController ", error.message || error);
        return res.status(500).json({
            msg:"Server Error try later",
            success:false,
            
        })
    }
}

//users their own complain or suggestion
export async function getYourComplainController(req,res) {
   try {
     const UserId = req.userData.UserMongoId
     const complain_suggestion = await Suggestion.find({compliant:UserId}).lean().select("imageUrl category complain_suggestion status -_id")
     
 
 
      return res.status(200).json({
             msg:"your complain or suggestion",
             success:true,
             complain_suggestion
         })
   } catch (error) {
    console.log("error from getYourComplainController", error.message || error);
    
    return res.status(200).json({
        msg:"Server error",
        success:false,
        })
   }
}

// for deleting suggestion or complaints
export async function deleteComplaneController(req, res) {
    const { complainId } = req.body;
    const role = req.userData.role;
    const userId = req.userData.UserMongoId;

    try {
        console.log(req.userData);

        if (!complainId) {
            return res.status(409).json({
                msg: "No complain ID found",
                success: false
            });
        }

        const complain = await Suggestion.findOne({ _id: complainId });

        if (!complain) {
            return res.status(404).json({
                msg: "No suggestion or complaint found",
                success: false
            });
        }

        // important to compare ObjectIds correctly
        if (complain.compliant.toString() !== userId.toString() && role !== "admin" && role !== "faculty") {
            return res.status(403).json({
                msg: "You are not authorized to delete this",
                success: false
            });
        }

        // If images are there, delete them from cloudinary
        if (complain.imageUrl.length > 0) {
            for (const item of complain.imageUrl) {
                await cloudinary.uploader.destroy(item.public_id);
            }
        }

        // Now delete the complaint from MongoDB
        await Suggestion.deleteOne({ _id: complainId });

        return res.status(200).json({
            msg: "Complaint or suggestion deleted successfully",
            success: true
        });

    } catch (error) {
        console.log(`error from deleteComplaneController ${error}`);
        return res.status(500).json({
            msg: "Server error, try later",
            success: false
        });
    }
}
