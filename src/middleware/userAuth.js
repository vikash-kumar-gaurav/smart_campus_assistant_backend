//here we will check token that is sendfrom the request from cookies and may be from header bearerer
import jwt from 'jsonwebtoken'
import { generate_accessToken } from '../utils/tokenGenerator.js'


async function validateToken(req, res, next) {
    const refreshToken = req.cookies?.refreshToken;
    const accessToken = req.cookies?.accessToken;
    
    

    try {
        if (!accessToken && !refreshToken) {
            return res.status(401).json({
                msg: "Login again, no token found",
                success: false
            });
        }

        const userData = jwt.verify(accessToken, process.env.SIGNATURE);
        req.userData = userData;
        return next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            try {
                const userData = jwt.verify(refreshToken, process.env.SIGNATURE);
                req.userData = userData;

                const newAccessToken = jwt.sign(
                    {
                        email: userData.email,
                        role: userData.role,
                        UserMongoId: userData.UserMongoId,
                        id: userData.id
                    },
                    process.env.SIGNATURE,
                    { expiresIn: '15m' }
                );

                res.cookie('accessToken', newAccessToken, {
                    httpOnly: true,
                    secure: process.env.product_status === 'development' || false,
                    sameSite: 'none',
                });

                return next();
            } catch (error) {
                console.error(error);
                return res.status(401).json({
                    msg: "Invalid or expired refresh token. Please login again.",
                    success: false
                });
            }
        } else {
            console.error("error from validateToken for accessToken");
            return res.status(500).json({
                msg: "Server error. Please try again later.",
                success: false
            });
        }
    }
}


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

         await jwt.verify(accessToken, process.env.SIGNATURE)
        
        return res.status(200).json({
                msg:"everything is good",
                success:true
        })
        

        
    } catch (error) {
        console.log("error from checkToken for accessToken",error);
        if (error.name === 'TokenExpiredError') {
            try {
                const userData = await jwt.verify(refreshToken, process.env.SIGNATURE)
                const newAccessToken = jwt.sign(
                    {
                        email: userData.email,
                        role: userData.role,
                        UserMongoId: userData.UserMongoId,
                        id: userData.id
                    },
                    process.env.SIGNATURE,
                    { expiresIn: '15m' }
                );

                res.cookie('accessToken', newAccessToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production' || false,
                    sameSite: 'Strict',
                });

                return res.status(200).json({
                    success:true
                })
                    
                
            } catch (error) {
                console.error("error from checkToken for accessToken",error);
                return res.status(401).json({
                    msg: "Invalid or expired refresh token. Please login again.",
                    success: false
                });
            }
        } else {
            console.log(error);
            return res.status(500).json({
                success:false,
                msg:"Server Error try later"
            })
            
        }
        
    }
}

export default validateToken;


