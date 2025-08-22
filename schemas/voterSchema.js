import mongoose from 'mongoose';

const voterSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    has_voted: { type: Boolean, default: false }
}, {
    versionKey: false
});

export default mongoose.model('voters', voterSchema); 