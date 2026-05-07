import mongoose from "mongoose";   
const connectDB = async () => { // Define an asynchronous function to connect to the MongoDB database using Mongoose

try {
    await mongoose.connect(process.env.MongoDB_URI); // Connect to the MongoDB database using the connection string from environment variables
    console.log("Connected to MongoDB successfully");
} catch (error) { // If there is an error during the connection, log the error message and exit the process with failure
    console.error("Error connecting to MongoDB:", error.message); // Log the error message to the console
    process.exit(1); // Exit the process with failure status code 1
}
}
export default connectDB;