# beGrowthChallenge

# How to run?

1. yarn install -> to install all of the dependencies
2. yarn sequelize db:create -> to create the db
3. yarn sequelize db:migrate -> to migrate the db
4. yarn start (yarn dev will run with nodemon)

# The application

- Register a market
- Markets can:
    1. Auth -> returns a token
    2. Register a new product

- Register a user
- Users can:
    1. Auth -> returns a token
    2. Consult products in their location

# Routes

POST - /market/ - Register a new market

GET  - /market/ - Search for market into a specific location (need authentication)

POST - /market/login - Authenticate the market, this route will return a jwt.


POST - /user/ - Register a new user

POST - /user/login - Authenticate the user, this route will return a jwt.


POST - /product/ - Register a new product (needs a market jwt)

GET - /product/ - Search for products into a specific location (needs a user jwt)

### How to register a market?

Pass a json with the information to the route
```
{
    "name":<the market name>,
    "email:<the market email>,
    "password":<a password for login>
    "local":<the market location>
    "lat":<the market location latitude>
    "long":<the market location longitude> # read the to-do section
}
```
### how to register a user?

Pass a json with the information to the route

{
    "name":<the user name>,
    "email:<the user email>,
    "password":<a password for login>,
    "local":<the user location>
}

### how to register a new product?

First of all, you need to login with a market:
Pass the json bellow to market login route

{
    "email":<the market email>,
    "password":<the market password>,
}

The login route will return a jwt, copy it.

On "register a new product" request, create an "auth-token"
field on the header, and feed it with the jwt.

On request body, pass this json:
{
    sku: <product sku>,
    qtd: <quantity>,
    val: [ <year>, <month>, <day> ] 
}

the expiration date (val) needs to be parsed, and needs to be in string format

If successful, you will receive a 200 status response.

### how to consult the products?

First, you will need to login as a user.
Request the following json to user-login route:

{
    email:<user email>,
    password:<user password>,
}

The request will returns a jwt, copy then

On "consult products" request, create an "auth-token".
field on the header, and feed it with the jwt.

This request dosn't needs a body.

On send, the request will return all of the products capable of the user
collect at your location, returning first products with a critical expiration date.

Hey, wait! In no time did I tell my location!

Yes, padawan! It's for this reason the route needs an authentication.

The jwt contains your user id. So, when you do the request, the route will
know your id, knowing your perfil beacuse of that.
Your location will be automatically passed to the route.

# What was used?

bcryptjs -> to deal with hashes;

config -> used to center all the configs into a single file;

express -> web frameword;

jsonwebtoken -> To create the jwt auth;

pg -> PostGres, for database;

sequelize -> ORM to deal with databases;

# to-do

1. each market contains a latitude and longitude. It can be used to print the exact location
of then into a map. This informations can be collected by showing a map during the market registration
and asking for the user if he wants to inform that, clicking on the map, above his position (or using geo-location to find that)

