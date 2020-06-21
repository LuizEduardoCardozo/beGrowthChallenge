const bcrypt = require('bcryptjs');

const user = require('../models/Users');

module.exports = {

    async create ( req, res ) {

        const { name, email, password, local } = req.body;

        const fUser = user.findAll({email});

        if(fUser) {
            console.log("User already registred");
            return res.status(401).json({err: "User alredy registred"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        await user.create({name, email, password: hashPassword, local});
        return res.status(200);

    },


    async index ( req, res ) {

        const fUser = await user.findAll({});
        return res.json(fUser);

    },


}
