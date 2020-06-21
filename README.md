# beGrowthChallenge

# How to run?

1. yarn install -> to install all of the dependencies
2. yarn sequelize db:create -> to create the db
3. yarn sequelize db:migrate -> to migrate the db
4. yarn start (yarn dev will run with nodemon)

# Routes

- Register a market
- Markets can:
    1. Auth -> returns a token
    2. Register a new product

- Register a user
- Users can:
    1. Auth -> returns a token
    2. Consult products in their location

# What was used?

bcryptjs -> to deal with hashes
config -> used to center all the configs into a single file
express -> web frameword
jsonwebtoken -> To create the jwt auth
pg -> PostGres, for database
sequelize -> ORM to deal with databases
