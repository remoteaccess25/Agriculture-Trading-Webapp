// Environment variables
require('dotenv').config()

// async error library
require('express-async-errors')

// express app initiation
const express = require('express')
const app = express();


// require middlewares
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const authenticateUser = require('./middleware/auth');

// require connection to the database(MONGO DB)
const conenctDB = require('./db/connect')

// Require Routes
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/product')


// parse the incomming json
app.use(express.json())

// Routing
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/products', productsRoute)

// use middleware
app.use(notFound)
app.use(errorHandlerMiddleware)


// port variable
const port = process.env.PORT || 3000


// app starting function
const start = async () => {
    try {
        // connect to the DB
        await conenctDB(process.env.MONGO_URI);
        
        app.listen(port, () => console.log(`Server is listening on port : ${port}`))
    } catch (err) {
        console.log(err);
    }
}

start()

