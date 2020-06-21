const product = require('../models/Product');
const market = require('../models/Market');

module.exports = {

    async create ( req, res ) {

        const { sku, qtd, val } = req.body;

        val.map(str => parseInt(str));

        const valDate = Date.parse(val);
        const now = Date.now();
        
        if(valDate < now) return res.status(300).json({err: "Rotten product"});

        const market_id = req.token_id;
        
        const _market = await market.findOne( { where: {id: market_id} });
        const location = _market.local;

        const newProduct = await product.create({sku, qtd, val ,location, market_id,});

        return res.send(newProduct);

    },

    async index ( req, res ) {

        const fProduct = await product.findAll({});
        return res.json(fProduct);

    },


} 