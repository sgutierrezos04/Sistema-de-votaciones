import express from "express";
import 'dotenv/config'
import dbclient from './config/dbclient.js';

import voterRouter from './routes/voterRoutes.js';
import candidateRouter from './routes/candidateRoutes.js';
import voteRouter from "./routes/voteRoutes.js";

const app = express();

app.use(express.json());
app.use('/voters', voterRouter);
app.use('/candidates', candidateRouter);
app.use('/votes', voteRouter);

app.get('/', (req, res) => {
    res.send('Sistema de Votaciones');
});

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`El servidor esta corriendo en el puerto ${PORT}`);
    });

}
catch (error) {
    console.log(error);
}
process.on('SIGINT', async () => {
    await dbclient.cerrarDB();
    process.exit(0);
});
