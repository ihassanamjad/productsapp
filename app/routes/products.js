const express = require('express');
const router = express.Router();

//Requiring a controller which is not defined yet
const productController = require('../controllers/products')

//A simple Test to check if our controller is communicating fine with our files
router.get('/test', productController.test);

//CRUD Operations
router.post('/Create', productController.create);
router.get('/GetProducts', productController.findAll);
router.get('/GetProducts/:productID', productController.findOne);
router.put('/UpdateProduct/:productID', productController.Update);
//router.get('/GetProducts', productController.findOne);

module.exports = router;