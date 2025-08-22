import express from "express";
import candidateController from '../controllers/candidateController.js';

const candidateRouter = express.Router();

candidateRouter.post("/", candidateController.crearCandidato);

candidateRouter.get("/", candidateController.allCandidatos);

candidateRouter.get("/:id", candidateController.verCandidato);

candidateRouter.delete("/:id", candidateController.borrarCandidato);

export default candidateRouter;
