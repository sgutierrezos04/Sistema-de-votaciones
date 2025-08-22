import jsonwebtoken from "jsonwebtoken";
import 'dotenv/config';

function verficarToken(req, res, next) {

    const token = req.header('Authorization')?.replace('Bearer', '').trim();

    if (!token) {
        return res.status(401).json({ error: 'No se ha proporcionado un token' });
    }

    try {
        const dataToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        req.user = dataToken;
        next();
    } catch (e) {
        return res.status(401).json({ error: 'Token no valido' });
    }
}

export default verficarToken;