const express = require('express');
const bodyParser = require('body-parser');

//initialize express application
const app = express();
let port = 9000;

//Importing the Routes 
const productRoute = require('./app/routes/products');

//Using the Routes
app.use('/products', productRoute);

//Listening Express application at port 9000
app.listen(9000, () => {
    console.log('Server is up and running at port ' +  port)
})