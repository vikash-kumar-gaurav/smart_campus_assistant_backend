import prisma from "../config/prismaConnect.js"

//create a new subject 
export async function createSubjectController(req,res) {
    const { code, name,semester,department,facultyId } = req.body
    const role = req.userData?.role
    try {

        if(!role === "admin" || !role === "faculty"){
            return res.status(403).json({
                msg:"buddy you are not authorized to create subject so please leave it don't waste time",
                success:false
            })
        }
        
        console.log(code,name,semester,department,facultyId);
        
        if(!code || !name ||!semester || !department || !facultyId){
            return res.status(409).json({
                msg:"Please fill all details",
                success:false
            })
        }
    
        const subject_data = await prisma.subject.create({
            data:{
                code,
                name,
                semester,
                department,
                facultyId
            }
        })
    
        return res.status(201).json({
            msg:"subject is created",
            success:true,
            subjectData:subject_data
        })
    } catch (error) {
        console.log(`error from createSubjectController ${error}`);
        return res.status(500).json({
            msg:"Server error, try later",
            success:false
        })
        
    }
}


// see all the available subjects
export async function getAllSubjectController(req,res) {
    try {
        const subjects = await prisma.subject.findMany()
        return res.status(200).json({
            msg:"all subject is here",
            success:true,
            subjects
        })
    } catch (error) {
        console.log(`error from getAllSubjectController ${error}`);
        return res.status(500).json({
            msg:"Server error try later",
            success:false,
        })
        
    }
}