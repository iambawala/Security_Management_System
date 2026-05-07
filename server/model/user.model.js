import mongoose from "mongoose"; // Import the mongoose library to define the schema and model for the User collection
const userSchema = new mongoose.Schema({ // Define the schema for the User model
    name: {
        type: String,
        trim : true,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        trim : true,
        required: [true, "Email is required"],
        unique: true
    },
    password: { 
        type: String,
        trim : true,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    profilePicture: {
        type: String,
        default: ''
    },
    isActive: {
        type: Boolean,
        default: true
    },
    flat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flat' // Reference to the Flat model
    }
});

const User = mongoose.model('User', userSchema); // Create the User model
export default User; // Export the User model for use in other parts of the application 