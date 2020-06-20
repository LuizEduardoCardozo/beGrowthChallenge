const router = require('express').Router()

const marketController = require('./controllers/marketControllers');

router.get('/', ( req, res ) => res.send("it's working! Keep going, bruh"));

router.post('/market', marketController.create); // create a new market
router.get('/market', marketController.index);
router.get('/market/:location', marketController.index);

module.exports = router;
