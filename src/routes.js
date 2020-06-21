const router = require('express').Router()

const auth = require('./middlewares/auth');

const marketController = require('./controllers/marketControllers');
const userController = require('./controllers/userControllers');
const productController = require('./controllers/productController');

router.get('/', ( req, res ) => res.send("it's working! Keep going, bruh"));

router.post('/market/', marketController.create); // create a new market
router.get('/market/', marketController.index);
router.get('/market/:location', marketController.index);
router.post('/market/login', marketController.login);

router.post('/user/', userController.create);
router.get('/user/', userController.index);

router.post('/product/', auth,  productController.create);
router.get('/product/', productController.index);

module.exports = router;
