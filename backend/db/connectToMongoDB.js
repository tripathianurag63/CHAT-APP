import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_DB_URI);
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to Mongo DB", error.message);
    }
};

export default connectToMongoDB;