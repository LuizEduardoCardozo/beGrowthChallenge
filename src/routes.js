const router = require('express').Router()

const auth = require('./middlewares/auth');

const marketController = require('./controllers/marketControllers');
const userController = require('./controllers/userControllers');
const productController = require('./controllers/productController');

/*
    -> /market/
    The POST ROUTE will register a new market in the database.

    The GET ROUTE will return all the markets in a location. The user needs to be 
    authenticated to do it because it used his location to find the nearest markets 
    from him.

    -> /market/login
    This route will be to auth a market. It returns a jwt token, containing his
    id

*/

router.post('/market/', marketController.create); // create a new market
router.get('/market/', auth, marketController.index);
router.post('/market/login', marketController.login);

/*
    -> /user/
    The post route will be to register a new user to the database, 

    -> /user/login
    This route will be to auth a user. It returns a jwt token, containing his
    id
*/

router.post('/user/', userController.create);
router.post('/user/login', userController.login);

/*
    -> /product/

    The POST ROUTE will create a new product in the database. Only markets can do this, 
    so, the auth there will be relative to the market.

    The GET ROUTE will return all the products in a location. The user needs to be 
    authenticated to do it because it used his location to find the nearest markets 
    from him.
    It returns first the products which have the bigger expiration date

*/

router.post('/product/', auth,  productController.create);
router.get('/product/', auth, productController.index);

module.exports = router;
