import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    party: { type: String, required: false },
    votes: { type: Number, default: 0 }
}, {
    versionKey: false
});

export default mongoose.model('candidates', candidateSchema);