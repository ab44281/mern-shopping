const express = require('express');
const router = express.Router();

const { getAllProducts,getProductById } = require('../controller/productControllers')

//@desc Get all products from db
//@route get /api/products
//@access Public
router.get('/',getAllProducts)

//@desc Get all products by id from db
//@route get /api/products/:id
//@access Public
router.get('/:id',getProductById)

module.exports=router;