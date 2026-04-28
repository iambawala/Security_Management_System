const mongoose = require('mongoose');   

try {
    mongoose.connect(process.env.MongoDB_URI);
    console.log("Connected to MongoDB successfully");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

export default connectDB