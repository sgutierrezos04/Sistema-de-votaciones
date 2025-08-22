import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
    voter_id: { type: mongoose.ObjectId, ref: 'voters', required: true },
    candidate_id: { type: mongoose.ObjectId, ref: 'candidates', required: true },
}, {
    versionKey: false
});

export default mongoose.model('votes', voteSchema);
