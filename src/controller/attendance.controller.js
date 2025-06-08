import prisma from "../config/prismaConnect.js";
import redis from "../config/redis.config.js";
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
export async function StudentAttendenceController(req, res) {
  const { month } = req.query;
  console.log(month);
  

  try {
    const userId = req.userData.id;

    // Parse month and calculate range
    const now = new Date();
    const year = now.getFullYear();
    const monthIndex = parseInt(month) - 1; // JavaScript month is 0-based

    const startDate = new Date(year, monthIndex, 1); // e.g., 2025-06-01
    const endDate = new Date(year, monthIndex + 1, 0, 23, 59, 59, 999); // e.g., 2025-06-30 23:59:59

    const attendance = await prisma.attendance.findMany({
      where: {
        studentId: parseInt(userId),
        date: {
          gte: startDate,
          lte: endDate
        }
      },
      select: {
        date: true,
        is_present: true,
        subject: {
          select: {
            name: true,
            faculty: {
              select: {
                name: true
              }
            }
          }
        }
      }
    });

    return res.status(200).json({
      success: true,
      attendance
    });
  } catch (error) {
    console.error("Error from StudentAttendanceController:", error.message || error);
    return res.status(500).json({
      success: false,
      msg: "Server error"
    });
  }
}


//mark attendance of bunch of students
export async function markBunchAttendanceController(req,res) {
    const { subjectId } = req.query
    const { department } = req.query
    const { semester } = req.query

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

        //here redis setup for temperory storage of aattendance
        

            const key = `attendance:${department}:${parseInt(semester)}`;
            await redis.del(key)
            const cached = await redis.set(
                key,
                JSON.stringify(studentData),
                "EX", 7200
            );
            console.log(department,parseInt(semester));
            
            console.log("redis cached data is", cached);

            // Retrieve and print what is saved in Redis
            const savedData = await redis.get(key);
            console.log("Data saved in Redis:", savedData);
            
        

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
