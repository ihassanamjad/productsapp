const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining Schema
let ProductSchema = new Schema(
    {
        name : {type: String, required: true, max: 100},
        price: {type: Number, required: true}
    }
);

//Exporting the Model

// mongoose.model(
//      1st argument = Name
//      2nd arugment = Schema
//      3rd argument = Collection Name you want to store in DB
//)
module.exports = mongoose.model(
    'Product' , ProductSchema 
)