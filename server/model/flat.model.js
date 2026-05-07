import mongoose from "mongoose";

const flatSchema = new mongoose.Schema({
    flatNumber: {
        type: String,
        required: true,
        unique: true
    },
    block: {
        type: String,
        required: true
    },
    floor: {
        type: Number,
        required: true
    }
});

const Flat = mongoose.model('Flat', flatSchema); // Create the Flat model
export default Flat; // Export the Flat model for use in other parts of the application