const product = require('../models/Product');

module.exports = {

    async create ( req, res ) {

        const { sku, qtd, val ,location, market_id, } = req.body;
        const newProduct = await product.create({sku, qtd, val ,location, market_id,});
        return res.send(newProduct);

    },

    async index ( req, res ) {

        const fProduct = await product.findAll({});
        return res.json(fProduct);

    },


} 