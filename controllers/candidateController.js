import candidate from '../models/candidate.js';
import voter from '../models/voter.js';

class candidateController {
    constructor() {}

    async crearCandidato(req, res) {
        try {
            const voterData = await voter.getVoterByName(req.body.name);
            if (voterData) {
                return res.status(404).json({ error: 'Un votante no puede ser candidato' });
            }
            const data = await candidate.createCandidate(req.body);
            res.status(201).json(data);
        } catch(e) {
            res.status(500).json({ error: e.message });
        }
    }

    async allCandidatos(req, res) {
        try {
            const data = await candidate.getAllCandidates();
            res.status(200).json(data);
        } catch(e) {
            res.status(500).json({ error: e.message });
        }
    }

    async verCandidato(req, res) {
        try {
            const { id } = req.params;
            const data = await candidate.getCandidateById(id);
            res.status(200).json(data);
        } catch(e) {
            res.status(500).json({ error: e.message });
        }
    }

    async borrarCandidato(req, res) {
        try {
            const { id } = req.params;
            await candidate.deleteCandidate(id);
            res.status(200).json({ message: 'Candidato borrado' });
        } catch(e) {
            res.status(500).json({ error: e.message });
        } 
    }
}

export default new candidateController();
