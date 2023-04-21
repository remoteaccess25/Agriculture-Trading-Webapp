// Environment variables
require('dotenv').config()

// async error library
require('express-async-errors')

// express app initiation
const express = require('express')
const app = express();

// requre cors
const cors = require('cors');
app.use(cors())

// require middlewares
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const authenticateUser = require('./middleware/auth');

// require connection to the database(MONGO DB)
const conncetDB = require('./db/connect')

// Require Routes
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/get-products')
const operationRoute = require('./routes/auth-products');


// parse the incomming json
app.use(express.json())

// Routing
app.use('/', authRoute)
app.use('/products', productsRoute)
app.use('/admin', authenticateUser, operationRoute)

// use middleware
app.use(notFound)
app.use(errorHandlerMiddleware)


// port variable
const port = process.env.PORT || 8000


// app starting function
const start = async () => {
    try {
        // connect to the DB
        await conncetDB(process.env.MONGO_URI2);

        app.listen(port, () => console.log(`Server is listening on port : ${port}`))
        // console.log(1)
    } catch (err) {
        console.log(err);
    }
}

start()

