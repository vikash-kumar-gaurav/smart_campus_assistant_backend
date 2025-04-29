//here we will check token that is sendfrom the request from cookies and may be from header bearerer
import jwt from 'jsonwebtoken'
import { generate_accessToken } from '../utils/tokenGenerator.js'
async function validateToken(req,res,next) {
    const accessToken = req.cookies?.accessToken
    const refreshToken = req.cookies?.refreshToken
    
    
    if(!accessToken && !refreshToken){
        return res.status(404).json({
            msg:"No token found login again",
            success:false
        })
    }
//this is not good there is problem it is not checking refresh token we have to work on it got it
    try {
        if (accessToken) {
        const userData = jwt.verify(accessToken, process.env.SIGNATURE);
        req.userData = userData;
        return next(); // Proceed to the next middleware or controller
        }

        if (refreshToken) {
        const userData = jwt.verify(refreshToken, process.env.SIGNATURE);
        req.userData = userData;

        // Generate a new access token and set it in cookies
        const newAccessToken = await generate_accessToken(userData.email);
        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production' || false, // Secure only in production
            sameSite: 'Strict', // Use 'Strict' for better CSRF protection
        });

        return next(); // Proceed to the next middleware or controller
        }

        // If neither token is valid, return an unauthorized response
        return res.status(401).json({
        msg: "Unauthorized access, please login again",
        success: false,
        });

    } catch (error) {
        console.error(`Error in validateToken middleware: ${error.message}`);
        return res.status(500).json({
        msg: "Internal server error, please try again later",
        success: false,
        });
    }
}

export default validateToken;


// import jwt from 'jsonwebtoken';
// import { generate_accessToken } from '../utils/tokenGenerator.js';

// async function validateToken(req, res, next) {
//     const accessToken = req.cookies?.accessToken;
//     const refreshToken = req.cookies?.refreshToken;

//     if (!accessToken && !refreshToken) {
//         return res.status(401).json({
//             msg: "No token found, please login again",
//             success: false,
//         });
//     }

//     try {
//         if (accessToken) {
//             const userData = jwt.verify(accessToken, process.env.SIGNATURE);
//             req.userData = userData;
//             return next(); // Proceed to the next middleware or controller
//         }

//         if (refreshToken) {
//             const userData = jwt.verify(refreshToken, process.env.SIGNATURE);
//             req.userData = userData;

//             // Generate a new access token and set it in cookies
//             const newAccessToken = await generate_accessToken(userData.email);
//             res.cookie('accessToken', newAccessToken, {
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === 'production',
//                 sameSite: 'Strict',
//                 maxAge: 15 * 60 * 1000, // Example: 15 minutes
//             });

//             return next(); // Proceed to the next middleware or controller
//         }
//     } catch (error) {
//         console.error(`Error in validateToken middleware: ${error.message}`);

//         if (error.name === 'TokenExpiredError') {
//             return res.status(401).json({
//                 msg: "Token expired, please login again",
//                 success: false,
//             });
//         }

//         if (error.name === 'JsonWebTokenError') {
//             return res.status(401).json({
//                 msg: "Invalid token, please login again",
//                 success: false,
//             });
//         }

//         return res.status(500).json({
//             msg: "Internal server error, please try again later",
//             success: false,
//         });
//     }
// }

// export default validateToken;