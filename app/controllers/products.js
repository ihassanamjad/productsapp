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

//Retreive all products from the database using Async Function
exports.findAll = async (req, res) => {
    let products = await Product.find().exec();
    if (products) {
        return res.send({
            status: true,
            message: "Products retreived successfully",
            data: products.map(n => n.name)
        })
    } else {
        return res.send({
            status: false,
            message: "No products found in database",
            data: products
        })
    }
}

//Retreive a single product from Database

exports.findOne = async (req, res) => {
    try {
        let product = await Product.findOne({
            _id: req.params.productID
        }).exec();
        if (!product) {
            return res.status(404).send({
                status: false,
                message: "No product found against id " + req.params.productID
            })
        } else {
            return res.send({
                status: true,
                message: "Product retrieved successfully",
                data: product
            })
        }
    } catch (error) {

        console.log(error.message);
        console.log(error.stack);
        return res.status(404).send({
            status: false,
            message: "No product found against id " + req.params.productID
        })
    }

}

//Update one product

exports.Update = (req, res) => {
    console.log(req.body);

    Product.findByIdAndUpdate(req.params.productID, {
        name: req.body.name,
        price: req.body.price
    }, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log('Result is ' + res);

    })
    res.send('Done')
}

exports.DeleteProduct = async (req, res) => {
    console.log(req.body);
    let deletedProduct = await Product.findByIdAndRemove(req.params.productID, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log('Result is ' + res);

    }).exec();
    res.send({
        productDeleted: true,
        message: "Product Deleted Successfully",
        data: deletedProduct
    })
}
// exports.Update = async (req, res) => {
//     let updatedProduct = await Product.findByIdAndUpdate(req.params.product_ID,
//         {
//             name: req.body.name,
//             price: req.body.price
//         },
//         {new : true}
//     ).exec();

//     return res.send(
//         {
//             status: true,
//             message: "Product Updated Successfully",
//             data: updatedProduct

//         }
//     )
//     //
// }


/*exports.findAll = (req, res) => {
    Product.find().then(
        products => {
            res.send(products);
        }
    ).catch(err => {
        res.status(500).send({
            message: err.message || "Some Error occurred while getting products"
        })
    })
}*/

//Retreive single product from the database
// exports.findOne = (req, res) => {
//     Product.findById(req.params.productID)
//     .then(product => {
//         if(!product){
//             return res.status(404).send({
//                 message: "Product not found against id " + req.params.productID
//             })
//         }
//         res.send(product);
//     }).catch(err => {
//         if (err.kind == 'ObjectId'){
//             return res.status(404).send({
//                 message: "Product Not found against id " + req.params.productID
//             })
//         }
//         return res.status(500).send({
//             message: "Error retrieving Product with this ID"
//         })
//     })
// }

// //Retreive single product from the database
// exports.findOne = (req, res) => {
//      let product = await Product.findById(req.query.productID).exec()
//     Product.findById(req.query.productID)
//     .then(product => {
//         if(!product){
//             return res.status(404).send({
//                 message: "Product not found against id " + req.params.productID
//             })
//         }
//         res.send(product);
//     }).catch(err => {
//         if (err.kind == 'ObjectId'){
//             return res.status(404).send({
//                 message: "Product Not found against id " + req.params.productID
//             })
//         }
//         return res.status(500).send({
//             message: "Error retrieving Product with this ID"
//         })
//     })
// }