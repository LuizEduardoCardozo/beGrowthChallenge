const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const user = require('../models/Users');

module.exports = {

    async create ( req, res ) {

        const { name, email, password, local } = req.body;

        const fUser = await user.findOne({where: {email}});

        if(fUser !== null) return res.status(401).json({err: "User alredy registred"});

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        await user.create({name, email, password: hashPassword, local});
        return res.status(200);

    },


    async index ( req, res ) {

        const fUser = await user.findAll({});
        return res.json(fUser);

    },

    async login ( req, res ) {

        const { email, password } = req.body;

        const _user = await user.findOne({ where: {email}});

        if(_user === null) return res.status(404).json({err: 'User not found!'});
        
        bcrypt.compare(password, _user.password, (err, result) => {

            const { id } = _user;

            if(result) {

                const token = jwt.sign({ id }, 'jwt_secret', {expiresIn: 360000});
                return res.status(200).json(token);

            } else {

                return res.status(401).json({msg: 'Password not match!'});

            }
        
        });

    }


}
