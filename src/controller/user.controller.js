import prisma from '../config/prismaConnect.js'
import User from '../models/user.models.js'
import bcrypt from 'bcrypt'
import { generate_accessToken, generate_refreshToken } from '../utils/tokenGenerator.js';
import redis from '../config/redis.config.js';


// to create a new user we will give this permission to only admin and faculty
 export async function createUserController(req,res) {
    
    
    try {
        const { name,email, password,role,  semester, department }  = req.body
        const imageUrl = req.cloudinaryUrls?.URL
        
        
        
        

        if(!name || !email || !password){
            return res.status(401).json({
                success: false,
                msg:"Give  all details"
            })
        }

        const existtUser = await User.findOne({ email: email })
        if(existtUser){
            return res.status(401).json({
                success: false,
                msg:"user already available",
                existtUser
            })
        }

        const hashedPassword = await  bcrypt.hash(password,10)

        const newUser = await User.create({
            name,
            email,
            role:role || "student",
            profile_pic:imageUrl,
            password:hashedPassword
        })

        
        
        const userData = await prisma.user.create({
            data:{
                name,
                role:role || "student",
                email,
                password:hashedPassword,
                semester,
                department,
                UserMongoId:newUser._id.toString(),
                profile_pic:imageUrl || ''
            }
        })

        return res.status(200).json({
            msg:`hay ${userData.name} your account is created successfully`,
            success:true,
            // data:{
            //     name:userData.name,
            //     email:userData.email
            // }
            userData
        })
    } catch (error) {

        //check for if email is duplicate in mongo or postgres
        if(error.code === 11000 || error.code ==="P2002"){
            return res.status(409).json({
                msg:"User is alredy available LogIn or use differnt account",
                success:false,
                error_code:error.code
            })
        }

        console.log(`error from createUserController ${error}`);
        return res.status(500).json({
            success:false,
            msg:"Server is busy could you try a bit later"
        })
        
    }
}

//to create user in a bulk
export async function bulkregisterController(req,res) {
    const {studentData} = req.body
    try {
        if(!studentData|| !Array.isArray(studentData)){
            return res.status(409).json({
                msg:"Plese give an array of student name"
            })
        }
        console.log(studentData);
        

        
        const studentRecordforMongo = await Promise.all(studentData.map(async student => {
            const Userpassword = `${student.name.split(' ')[0]}@${student.collegeId}`;
            const hashedPassword = await bcrypt.hash(Userpassword, 10);
            
            
            return {
                name: student.name,
                password: hashedPassword,
                profile_pic: 'https://images.unsplash.com/photo-1635009870288-3b1c1b98fa35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjaGFyeSUyMGdob3N0fGVufDB8fDB8fHww',
                role: "student", // Should be "student" for bulk student registration
                collegeId:student.collegeId,
                roll_no:student.roll_no,
                email: `${student.name.toLowerCase().split(' ')[0]}.bcastudent23.${student.collegeId}@cimage.in`
            };
        }))
        console.log(studentRecordforMongo);
        

        const result = await User.insertMany(studentRecordforMongo, {ordered:false})
        console.log(result);
        

        const studentRecordForPostgres = result.map(studentDoc => ({
            name: studentDoc.name,
            password: studentDoc.password,
            profile_pic: studentDoc.profile_pic,
            role: studentDoc.role,
            email: studentDoc.email,
            UserMongoId: studentDoc._id,
            semester:5,    //these are for only students
            department:"BCA",
            collegeId:studentDoc.collegeId,
            roll_no:studentDoc.roll_no   
        }))

        const data = await prisma.user.createMany({
            data:studentRecordForPostgres,
            skipDuplicates:true
        })

        return res.status(201).json({
            msg:"user created successfully",
            success:true,
            data
        })


    } catch (error) {
        console.log(`error from bulkregisterController ${error}`);

        return res.status(500).json({
            msg:"server error",
            success:false
        })
        
    }
}

//for login controller we have 
export async function loginController(req,res) {
    try {
        const {email, password, rememberMe } = req.body
        const isremember = rememberMe === "true" || rememberMe ===true
        console.log(isremember);
        
        
        
        if(!email || !password){
            return res.status(409).json({
                msg:"Please provide email and password",
                success:false
            })
        }

        const user = await prisma.user.findUnique({
            where:{email:email},
            
        })

        if(!user){
            return res.status(404).json({
                msg:"No user found Please register first"
            })
        }

        const isCorrectPassword = await bcrypt.compare(password,user.password)

        if(!isCorrectPassword){
            return res.status(401).json({
                msg:"Invalid credentials",
                success:false,
                
            })
        }

        //if every thing is fine return accessToken , refreshToken and a alert mail(not necessary)

        const accessToken = await generate_accessToken( email, user.role, user.UserMongoId,user.id)
        const refreshToken = await generate_refreshToken(email,user.role, user.UserMongoId,user.id)

        const cookieOptions = {
            httpOnly:true,
            secure:false,
            sameSite:'lax'
        }

        res.cookie('accessToken', accessToken, cookieOptions);
        if(isremember){
            res.cookie('refreshToken', refreshToken, cookieOptions);
        }

        return res.status(200).json({
            msg:`hey ${user.name} welcome back`,
            success:true,
            userData:{
                    name:user.name,
                    email:user.email,
                    role:user.role,
                    profile_pic:user.profile_pic,
                    semester:user.semester,
                    department:user.department,
                    id:user.id
                }
        })
    } catch (error) {
        console.log(`error from loginController ${error}`);
        return res.status(500).json({
            msg:"Server error try later",
            success:false
        })
        
    }
}

//for change password can be changed by individuals one
export async function changePasswordController(req,res) {
    const { password, confirm_password, email}  = req.body
    
    if(!password || !confirm_password ||!email){
        return res.status(403).json({
            msg:"Please fill all the details",
            success:false
        })
    }

    try {
        if(password != confirm_password){
            return res.status(403).json({
                msg:"password and confirm password must be same",
                success:false
            })
        }
    
        const hashedPassword = await bcrypt.hash(password,10)
    
        const user = await prisma.user.update({
            data: { password: hashedPassword },
            where: { email: email }
        })
    
        return res.status(201).json({
            msg:"password changed successfully",
            success:true
        })
    } catch (error) {
        console.log(`error from changePasswordController ${error}`);
        return res.status(500).json({
            msg:"Server errror try later after some time",
            success:false
        })
        
    }
}

//find user on the basic of query parameter like course and semester
export async function findUserController(req, res) {
    const { semester, department } = req.query; // Changed to req.query for query parameters
    
    try {
        if (!semester || !department) {
            return res.status(400).json({ // Changed status code to 400 for bad request
                msg: "Please provide all details",
                success: false
            });
        }//here we collect the data form the redis and send the studentData
        console.log(department,semester);
        
        const key = `attendance:${department}:${parseInt(semester)}`;
        const cached = await redis.get(key);
        console.log("cached data is ",cached);
        



        const users = await prisma.user.findMany({
            where: {
            department: department,
            semester: parseInt(semester) // Ensure semester is an integer
            },
            select: {
            id: true,
            name: true,
            roll_no:true,
            collegeId:true
            },
            orderBy: {
            id: 'asc'
            }
        });

        return res.status(200).json({
            success: true,
            users: cached ? JSON.parse(cached) : users
        });
        
    } catch (error) {
        console.log(`Error from findUserController: ${error}`);
        return res.status(500).json({
            success: false,
            msg: "Server error, try later"
        });
    }
}

//find one student with the help of userId 
export async function getUserByIdController(req,res) {
    try {
        const { userId } = req.query
        const userRole = req.userData.role
        if(userRole !== "admin" && userRole !== "faculty") {
            return res.status(403).json({
                msg:"you are not authorized to access this",
                success:false
            })
        }
        const student = await prisma.user.findUnique({
            where: {
                id: parseInt(userId)
            },
            select: {
                name: true,
                semester: true,
                department: true
            }
        })

        return res.status(200).json({
            success: true,
            student
        })
    } catch (error) {
        console.log("error from getUserbyIdController",error.message || error);
        return res.status(500).json({
            msg:"Server Error",
            success:false
        })
        
    }
}