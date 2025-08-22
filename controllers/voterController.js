import voter from '../models/voter.js';
import candidate from '../models/candidate.js';

class voterController {
    constructor() {}

    async crearVotante(req, res) {
        try {
            const candidateData = await candidate.getCandidateByName(req.body.name);
            if (candidateData) {
                return res.status(404).json({ error: 'Un candidato no puede ser votante' });
            }
            const data = await voter.createVoter(req.body);
            res.status(201).json(data)
        } catch(e) {
            res.status(500).json({ error: e.message })
        }
    }

    async allVotantes(req, res) {
        try {
            const data = await voter.getAllVoters();
            res.status(200).json(data);
        } catch(e) {
            res.status(500).json({ error: e.message })
        }
    }

    async verVotante(req, res) {
        try {
            const { id } = req.params;
            const data = await voter.getVoterById(id);
            res.status(200).json(data);
        } catch(e) {
            res.status(500).json({ error: e.message })
        }
    }

    async borrarVotante(req, res) {
        try {
            const { id } = req.params;
            await voter.deleteVoter(id);
            res.status(200).json({ message: 'Votante borrado' });
        } catch(e) {
            res.status(500).json({ error: e.message })
        }
    }
}

export default new voterController();
