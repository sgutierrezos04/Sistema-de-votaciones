import Vote from '../schemas/voteSchema.js'
import candidate from './candidate.js';

class voteModel {

    async createVote(vote) {
        return await Vote.create(vote);
    }

    async getAllVotes() {
        return await Vote.find();
    }

    async getStatistics() {
        const candidateStats = await Vote.aggregate([
            { $group: { _id: '$candidate_id', totalVotes: { $sum: 1 } } },
            { $group: { _id: null, total: { $sum: '$totalVotes' }, 
                results: { $push: { 
                        candidate_id: '$_id', 
                        totalVotes: '$totalVotes' } } } },
            { $unwind: '$results' },
            { $project: {
                _id: '$results.candidate_id',
                totalVotes: '$results.totalVotes',
                percentage: { $multiply: [ { $divide: [ '$results.totalVotes', '$total' ] }, 100 ] }
                } }
        ]);

        // Se agrega el nombre del candidato para mas claridad
        for (const c of candidateStats) {
            c.candidate_name = await candidate.getCandidateNameById(c._id);
        }
        const totalVoters = await Vote.find();
 
        return {
            candidates: candidateStats,
            totalVoters: totalVoters.length
        };
    }
}

export default new voteModel();
