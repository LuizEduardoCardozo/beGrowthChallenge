const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const market = require('../models/Market');

module.exports = {

    async create ( req, res ) {

        const { name, email, password,local,lat,long, } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newMarket = await market.create({name, email, password: hashPassword,local,lat,long});
        return res.send(newMarket);

    },

    async index ( req, res ) {

        const { location } = req.params;

        if( location === undefined ) {

            const markets = await market.findAll();
            return res.json(markets);

        }else {

            const markets = await market.findAll({ where: { local: location }});
            return res.json(markets);

        }

    },

    async login ( req, res ) {

        const { email, password } = req.body;

        const _market = await market.findOne({ where: {email}});

        if(_market === null) return res.status(404).json({err: 'User not found!'});
        
        bcrypt.compare(password, _market.password, (err, result) => {

            const { id } = _market;

            if(result) {

                const token = jwt.sign({ id }, 'jwt_secret', {expiresIn: 360000});
                return res.status(200).json(token);

            } else {

                return res.status(401).json({msg: 'Password not match!'});

            }

        });

    },

}
