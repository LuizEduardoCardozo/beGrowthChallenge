const market = require('../models/Market');

module.exports = {

    async create ( req, res ) {

        const { name,password,local,lat,long, } = req.body;
        const newMarket = await market.create({name,password,local,lat,long});
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



}
