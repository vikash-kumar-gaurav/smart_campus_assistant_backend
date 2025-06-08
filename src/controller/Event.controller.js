import Event from '../models/Event.model.js'
import { v2 as cloudinary } from 'cloudinary';

//creating a new Event
export async function createEventController(req,res) {
    const { title, description, date,  venue } = req.body
    const image_url = req.cloudinaryUrls
    const userId = req.userData.UserMongoId
    const role = req.userData.role
    try {
        console.log(title,description,date,venue);
        
        if(!title || !description || !date || !venue){
            return res.status(409).json({
                msg:"Please fill all detail",
                success:false
            })
        }

        if(role !== "faculty" && role !=="admin"){
            return res.status(403).json({
                msg:"Student are not authorized to create events",
                success:false
            })
        }

        await Event.create({
            title,
            description,
            date,
            venue,
            image_url:image_url,
            posted_by:userId
        })
        return res.status(200).json({
            msg:"Event created",
            success:true
        })
    } catch (error) {
        console.log("error from createEventController",error.response?.data || error.message);
        return res.status(500).json({
            msg:"Server Error try later",
            success:false
        })
        
    }
}

//get all events 
export async function getAllEventsController(req,res) {
    try {
        const events = await Event.find()
        .populate('posted_by', 'profile_pic')
        return res.status(200).json({
            success: true,
            events
        })
    } catch (error) {
        console.log("error from getAllEventController", error.response?.data || error.message);
        return res.status(500).json({
            msg: "Server Error try later",
            success: false // Corrected 'False' to 'false'
        }) 
    }    
}

//update event
export async function updateEvenController(req,res) {
    const { eventId } = req.body
    const { title, description, date, venue } = req.body
    const role = req.userData.role
    try {
        if(!eventId){
            return res.status(409).json({
                success: false,
                msg: "Please provide eventId"
            })
        }
        if(role !=="faculty" && role !=="admin"){
            return res.status(403).json({
                success:false,
                msg:"You are not authorized to update event"
            })
        }

        const updatedEvent = await Event.findOneAndUpdate(
            { _id: eventId }, // Correct query format
            {
                ...(title && { title }),
                ...(description && { description }),
                ...(date && { date }),
                ...(venu && { venu })
            },
            { new: true } // Return the updated document
        ).lean()

        if(!updatedEvent){
            return res.status(404).json({
                success: false,
                msg: "No event found"
            })  
        }

        return res.status(200).json({ // Use 200 for successful update
            success: true,
            msg: "Event updated successfully",
            updatedEvent
        })
    } catch (error) {
        console.log("error from updateEventController", error.response?.data || error.message);
        return res.status(500).json({
            msg: "Server Error, try later",
            success: false // Correct case for 'false'
        })
    }
}

//delete an event
export async function deleteEventController(req, res) {
    const { eventId } = req.body;
    const role = req.userData.role;

    try {
        if (!eventId) {
            return res.status(409).json({
                success: false,
                msg: "Please provide eventId"
            });
        }

        if (role !== "admin") {
            return res.status(403).json({
                success: false,
                msg: "You are not authorized to delete event"
            });
        }

        const isEvent = await Event.findById(eventId);
        if (!isEvent) {
            return res.status(404).json({
                success: false,
                msg: "No event found"
            });
        }

        if (isEvent.image_url && Array.isArray(isEvent.image_url)) {
            for (const item of isEvent.image_url) {
                await cloudinary.uploader.destroy(item.public_id);
            }
        }

        await Event.deleteOne({ _id: eventId });

        return res.status(200).json({
            success: true,
            msg: "Event deleted"
        });
    } catch (error) {
        console.log("Error from deleteEventController", error.response?.data || error.message);
        return res.status(500).json({
            success: false,
            msg: "Server Error try later"
        });
    }
}

//auto delete events after two days
export async function autoEventDeletionController() {
    try {
        const events = await Event.find({ date: { $lt: new Date() } }); // Find events with date less than today
        for (const event of events) {
            if (event.image_url && Array.isArray(event.image_url)) {
                for (const url of event.image_url) {
                    const public_id = url.public_id;
                    await cloudinary.uploader.destroy(public_id); // Delete images from Cloudinary
                }
            }
            await Event.deleteOne({ _id: event._id }); // Delete the event from the database
        }
        console.log("Auto-deletion of past events completed successfully.");
    } catch (error) {
        console.log("Error from autoEventDeletionController", error.response?.data || error.message);
    }
}