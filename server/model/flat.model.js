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