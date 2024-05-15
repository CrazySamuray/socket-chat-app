import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (err) { 
        console.log("Error conecting to MongoDB", err.message)
    }
}

export default connectToMongoDB;