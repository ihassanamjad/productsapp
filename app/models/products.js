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
module.exports = mongoose.model(
    'Product' , ProductSchema
)