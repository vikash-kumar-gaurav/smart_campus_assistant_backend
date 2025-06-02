import jwt from 'jsonwebtoken';

export async function generate_accessToken( email, role,UserMongoId,id) {
    try {
        const token = jwt.sign({ email, role,UserMongoId,id }, process.env.SIGNATURE, { expiresIn: '30m' });
        return token;
    } catch (error) {
        console.error('Error generating access token:', error);
        throw new Error('Failed to generate access token');
    }
}

export async function generate_refreshToken( email, role,UserMongoId,id) {
    try {
        const token = jwt.sign({ email, role,UserMongoId,id }, process.env.SIGNATURE, { expiresIn: '3h' });
        return token;
    } catch (error) {
        console.error('Error generating refresh token:', error);
        throw new Error('Failed to generate refresh token');
    }
}