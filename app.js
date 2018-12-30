const express = require('express');
const bodyParser = require('body-parser');

//initialize express application
const app = express();
let port = 9000;

//Listening Express application at port 9000
app.listen(9000, () => {
    console.log('Server is up and running at port ' +  port)
})