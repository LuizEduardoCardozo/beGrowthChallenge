const user = require('../models/Users');

module.exports = {

    async create ( req, res ) {

        const { name,password,local } = req.body;
        const newUser = await user.create({name,password,local});
        return res.send(newUser);

    },

    async index ( req, res ) {

        const fUser = await user.findAll({});
        return res.json(fUser);

    },


}
