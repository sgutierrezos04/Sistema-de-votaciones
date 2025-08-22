import Voter from '../schemas/voterSchema.js';

class voterModel {

    async createVoter(voter) {
        return await Voter.create(voter);
    }

    async getAllVoters() {
        return await Voter.find();
    }

    async getVoterById(id) {
        return await Voter.findById(id);
    }

    async deleteVoter(id) {
        return await Voter.findByIdAndDelete(id);
    }


    // Usado en la verificacion de votantes y candidatos
    async getVoterByName(name) {
        return await Voter.findOne({ name });
    }

    // Usado para actualizar el voto
    async updateVoter(voter) {
        return await Voter.findByIdAndUpdate(voter._id, voter);
    }
}

export default new voterModel(); 