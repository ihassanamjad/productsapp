const Product = require('../models/products')

//Testing a controller
exports.test = function (req, res) {
    res.send('Greetings from the Test Controller')
}

//Testing a Create Controller
exports.create = (req, res) => {

    //Validate Request
    if (!req.body.name && !req.body) {
        return res.status(400).send({
            message: "Products data cannot be empty"
        });
    }

    //Create a product
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    })

    //Save Product in the database
    product.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the Product"
            })
        })
}

//Retreive all products from the database
exports.findAll = (req, res) => {
    Product.find().then(
        products => {
            res.send(products);
        }
    ).catch(err => {
        res.status(500).send({
            message: err.message || "Some Error occurred while getting products"
        })
    })
}