import vote from '../models/vote.js';
import voter from '../models/voter.js';
import candidate from '../models/candidate.js';


class voteController {
    constructor() {}

    async crearVoto(req, res) {
        try {
            const { voter_id, candidate_id } = req.body;
            const voterData = await voter.getVoterById(voter_id);
            const candidateData = await candidate.getCandidateById(candidate_id);
            if (!voterData) {
                return res.status(404).json({ error: 'Votante no encontrado' });
            }
            else if (!candidateData) {
                return res.status(404).json({ error: 'Candidato no encontrado' });
            }
            else if (voterData.has_voted) {
                return res.status(400).json({ error: 'El votante ya ha votado' });
            }
            const data = await vote.createVote(req.body);

            voterData.has_voted = true;
            await voter.updateVoter(voterData);

            await candidate.incrementVoteCount(candidate_id);

            res.status(201).json(data);

        } catch(e) {
            res.status(500).json({ error: e.message });
        }
    }

    async allVotos(req, res) {
        try {
            const data = await vote.getAllVotes();
            res.status(200).json(data);
        } catch(e) {
            res.status(500).json({ error: e.message });
        }
    }

    async verEstadisticas(req, res) {
        try {
            const statistics = await vote.getStatistics();
            res.status(200).json(statistics);
        } catch(e) {
            res.status(500).json({ error: e.message });
        }
    }
}

export default new voteController();
