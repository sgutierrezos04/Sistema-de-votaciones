import express from "express";
import candidateController from '../controllers/candidateController.js';
import verficarToken from "../helpers/autenticacion.js";

const candidateRouter = express.Router();

candidateRouter.post("/", candidateController.crearCandidato);

candidateRouter.get("/", candidateController.allCandidatos);

candidateRouter.get("/:id", candidateController.verCandidato);

candidateRouter.delete("/:id", verficarToken, candidateController.borrarCandidato);

export default candidateRouter;
