
import prisma from '../config/prismaConnect.js'
import User from '../models/user.models.js'
import bcrypt from 'bcrypt'
import { generate_accessToken, generate_refreshToken } from '../utils/tokenGenerator.js';


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
            data:{
                name:userData.name,
                email:userData.email
            }
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
    const {studentName} = req.body
    try {
        if(!studentName || !Array.isArray(studentName)){
            return res.status(409).json({
                msg:"Plese give an array of student name"
            })
        }

        const password = await bcrypt.hash('123456',10)
        const studentRecordforMongo = studentName.map(student => ({
            name:student,
            password:password,
            profile_pic:'https://res.cloudinary.com/dacrc4ddi/image/upload/v1745756188/angry-girl-with-blonde-hair_g0nefe.jpg',
            role:"faculty",
            email:`${student}@email.com`
        }))

        const result = await User.insertMany(studentRecordforMongo, {ordered:false})

        const studentRecordForPostgres = result.map(studentDoc => ({
            name: studentDoc.name,
            password: studentDoc.password,
            profile_pic: studentDoc.profile_pic,
            role: studentDoc.role,
            email: studentDoc.email,
            UserMongoId: studentDoc._id
            //semester:1,    these are for only students
            //department:"BCA"   
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
        console.log(email);
        
        if(!email || !password){
            return res.status(409).json({
                msg:"Please provide email and password",
                success:false
            })
        }

        const user = await prisma.user.findUnique({
            where:{email:email}
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
                success:false
            })
        }

        //if every thing is fine return accessToken , refreshToken and a alert mail(not necessary)

        const accessToken = await generate_accessToken(email, user.role, user.UserMongoId,user.id)
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
            success:true
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

//find user one the basic of query parameter like course and semester
export async function findUserController(req, res) {
    const { semester, department } = req.query; // Changed to req.query for query parameters
    try {
        if (!semester || !department) {
            return res.status(400).json({ // Changed status code to 400 for bad request
                msg: "Please provide all details",
                success: false
            });
        }

        const users = await prisma.user.findMany({
            where: {
                department: department,
                semester: parseInt(semester) // Ensure semester is an integer
            },
            select:{
                id:true,
                name:true
            }
        });

        return res.status(200).json({
            success: true,
            users
        });
        
    } catch (error) {
        console.log(`Error from findUserController: ${error}`);
        return res.status(500).json({
            success: false,
            msg: "Server error, try later"
        });
    }
}