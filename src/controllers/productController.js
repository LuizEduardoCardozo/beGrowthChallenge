const jwt = require('jsonwebtoken');

const product = require('../models/Product');
const market = require('../models/Market');
const user = require('../models/Users');

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

        const userToken = req.header('auth-token');

        if(!userToken) return res.status(401).json({err: 'No token provided!'});

        const { id } = await jwt.decode(userToken, 'jwt_token');
        
        const { local } = await user.findOne({ where: {id} })

        const fProduct = await product.findAll( { where: { location: local }, order: [['val', 'DESC']]});
        
        return res.json(fProduct);

    },


} 