
import mongoose from 'mongoose';


const connectToMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }

        const connection = await mongoose.connect(mongoURI);

        console.log(
            `Database connected successfully on host: ${connection.connection.host}, name: ${connection.connection.name}`
        );
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectToMongoDB