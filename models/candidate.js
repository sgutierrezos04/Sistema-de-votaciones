import Candidate from '../schemas/candidateSchema.js';

class candidateModel {
    
    async createCandidate(candidate) {
        return await Candidate.create(candidate);
    }

    async getAllCandidates() {
        return await Candidate.find();
    }

    async getCandidateById(id) {
        return await Candidate.findById(id);
    }

    async deleteCandidate(id) {
        return await Candidate.findByIdAndDelete(id);
    }
    

    // Usado en la verificacion de votantes y candidatos
    async getCandidateByName(name) {
        return await Candidate.findOne({ name });
    }

    // Usado para incrementar el conteo de votos
    async incrementVoteCount(id) {
        return await Candidate.findByIdAndUpdate(id, { $inc: { votes: 1 } });
    }

    // Usado para las estadisticas
    async getCandidateNameById(id) {
        const candidate = await Candidate.findById(id);
        return candidate.name;
    }

    // Usado para no permitir la eliminacion de un candidato si este ya ha recibido votos
    async hasVotes(id) {
        const candidate = await Candidate.findById(id);
        return candidate ? candidate.votes > 0 : false;
    }
}

export default new candidateModel();
