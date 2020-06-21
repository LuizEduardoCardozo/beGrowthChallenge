const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = ( req, res, nxt ) => {

    const token = req.header('auth-token');
    if(!token) res.status(401).json({err: "No token provided!"});

    try {

        const decoded = jwt.decode(token, 'jwt_secret');
        req.token_id = decoded.id;

        nxt();

    } catch ( err ) {

        if ( err ) throw err.message;
        return res.send(400);

    }



}