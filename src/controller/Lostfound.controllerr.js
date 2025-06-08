import Lostfound from "../models/Lost&Found.js";
//to create a new data of lost or found
export async function createLostfoundController(req,res) {
    try {
        const { ItemName, Detail, category, contactNum, location } = req.body
        console.log(ItemName, Detail, category, contactNum,location );
        
        const LostFoundImages = req.cloudinaryUrls
        console.log("lost and found url", LostFoundImages);
        
        const userId = req.userData.UserMongoId
        if(!ItemName || !Detail || !category || !contactNum || !location){
            return res.status(401).json({
                msg:"Please fill all details",
                success:false
            })
        };
        
        const data = await Lostfound.create({
            ItemName,
            Detail,
            category,
            Items_image:LostFoundImages,
            userId,
            contact:contactNum,
            location
        })

        return res.status(200).json({
            msg:"Request added",
            success:true,
            data
        })

    } catch (error) {
        console.log("error from createLoatfoundController",error.message || error);
        return res.status(500).json({
            msg:"Server Error try later",
            success:false,
            
        })
    }
}

//to find all the lost and found items
export async function getlostItemsController(req,res) {
    try {
        const items = await Lostfound.find()
        .sort({createdAt: -1})
        .populate("userId", "name profile_pic")
        .select(" -createdAt -updatedAt -__v")
        .lean()

        res.status(200).json({
            success:true,
            items
        })
    } catch (error) {
        console.log("getlostItemsController",error.message || error);
        return res.status(500).json({
            msg:"Server Error try later",
            success:false,
            
        })
    }
}