import express from 'express'
import voterController from '../controllers/voterController.js'

const voterRouter = express.Router()

voterRouter.post('/', voterController.crearVotante)

voterRouter.get('/', voterController.allVotantes)

voterRouter.get('/:id', voterController.verVotante)

voterRouter.delete('/:id', voterController.borrarVotante)

export default voterRouter;