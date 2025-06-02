import prisma from "../config/prismaConnect.js";
//to mark attandance of individuals 
export async function markAttendanceController(req, res) {
    const { studentId, subjectId, is_present, date } = req.body;
    const role = req.userData?.user
    if (role !== "admin" && role !== "faculty") {
        return res.status(403).json({
            msg:"buddy you are not authorized to mark attendance so please leave it don't waste time",
            success:false
        })
    }
    if (!studentId || !subjectId || is_present === undefined) {
        return res.status(409).json({
            msg: "Please provide all details",
            success: false
        });
    }
    
    try {
        const attendanceData = await prisma.attendance.create({
            data: {
                studentId,
                subjectId,
                is_present,
                date: date || new Date()
            }
        });

        res.status(201).json({
            msg: "Attendance marked",
            success: true,
            data: attendanceData
        });
    } catch (error) {
        console.log(`Error from markAttendanceController: ${error}`);
        res.status(500).json({
            msg: "Server error, try later",
            success: false
        });
    }
}

//to see the attandance 
export async function seeAttendanceControllerr(req,res) {
    try {
        const user = await prisma.attendance.findMany()
        return res.status(200).json({
            msg:"here is the attancdance",
            success:true,
            user
        })
    } catch (error) {
        console.log(`Error from seeAttendanceController: ${error}`);
        res.status(500).json({
            msg: "Server error, try later",
            success: false
        });
    }
}

//se your own attendance fors student
export async function StudentAttendenceController(req,res) {

   try {
       const userId = req.userData.id
        const targetDate = new Date('2025-04-01');
        const targetEndDay = new Date('2025-06-29')

        // Start of the day: 00:00:00.000
        const startOfDay = new Date(targetDate);
        startOfDay.setHours(0, 0, 0, 0);

        // End of the day: 23:59:59.999
        const endOfDay = new Date(targetEndDay);
        endOfDay.setHours(23, 59, 59, 999);
        const attendance = await prisma.attendance.findMany({
        where:{
            studentId:userId,
            date:{
            gte: startOfDay,
            lte: endOfDay
            }
        },
        include:{
            teacher:true,
            subject:true
        }
       })

       return res.status(200).json({
        success:true,
        attendance
       })
   } catch (error) {
    console.log("error from studentAttendanceController",error.message || error);
    return res.status(500).json({
        success:true,
        msg:"Server errror"
       })
   }
    
}

//mark attendance of bunch of students
export async function markBunchAttendanceController(req,res) {
    const { subjectId } = req.query
    const {studentData} = req.body
    const role = req.userData?.role
    const userId = req.userData?.id
    
    
    try {
        if (role !== "admin" && role !== "faculty") {
            return res.status(403).json({
            msg: "buddy you are not authorized to mark attendance so please leave it don't waste time",
            success: false
            });
        }
        
        if( !Array.isArray(studentData)){
            return res.status(409).json({
                msg:"Please fill all the details i.e teacher's Id and subjectId or the studentData is not an array",
                success:false
            })
        }
        const attendanceRecord = studentData.map(student => ({
            studentId:student.id,
            subjectId:parseInt(subjectId),
            date: new Date(),
            is_present:student.status, 
            teacherId : userId

        }))
        const result = await prisma.attendance.createMany({
            data:attendanceRecord,
            skipDuplicates:true
        })

        return res.status(201).json({
            msg:"attendance marked successfully",
            success:true,
            result
        })
    } catch (error) {
        console.log(`Error from markBunchAttendanceController: ${error}`);
        res.status(500).json({
            msg: "Server error, try later",
            success: false
        });
    }
}
