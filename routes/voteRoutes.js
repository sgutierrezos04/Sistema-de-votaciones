import express from "express";
import voteController from '../controllers/voteController.js';

const voteRouter = express.Router();

voteRouter.post("/", voteController.crearVoto);

voteRouter.get("/", voteController.allVotos);

voteRouter.get("/statistics", voteController.verEstadisticas);

export default voteRouter;
