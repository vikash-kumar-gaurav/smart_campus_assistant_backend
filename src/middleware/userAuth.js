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
        if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'TOKEN_EXPIRED', message: 'Access token has expired' });
        } else if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'INVALID_TOKEN', message: 'Token is invalid' });
        } else {
        return res.status(500).json({ error: 'SERVER_ERROR', message: 'Internal error' });
        }
    }
}

export default validateToken;

export async function checkToken(req,res) {
    try {
        const accessToken = req.cookies?.accessToken
        const refreshToken = req.cookies?.refreshToken
        if(!accessToken && !refreshToken){
            return res.status(409).json({
                msg:"no Token found Login again",
                success: false
            })
        }

        const data = await jwt.verify(accessToken, process.env.SIGNATURE)
        if( data ){
            return res.status(200).json({
                msg:"everything is good",
                success:true
            })
        }

        
    } catch (error) {
        console.log(error);
        if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'TOKEN_EXPIRED', message: 'Access token has expired' });
        } else if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'INVALID_TOKEN', message: 'Token is invalid' });
        } else {
        return res.status(500).json({ error: 'SERVER_ERROR', message: 'Internal error' });
        }
        
    }
}


