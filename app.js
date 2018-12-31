const express = require('express');
const bodyParser = require('body-parser');

const MongoURL = require('./config/db');
const mongoose = require('mongoose');

//initialize express application
const app = express();
let port = 9000;

app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())



//Importing the Routes 
const productRoute = require('./app/routes/products');

//Connecting Database
mongoose.Promise = global.Promise;

mongoose.connect(MongoURL.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully Connected to the Database");
}).catch(err => {
    console.log("Could Not connect to the database. Exitting Now... ", err);
    process.exit();
})

//Using the Routes
app.use('/products', productRoute);

//Listening Express application at port 9000
app.listen(9000, () => {
    console.log('Server is up and running at port ' + port)
})