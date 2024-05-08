// controllers/productController.js
const Product = require('../models/productModels');

// Controller actions
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);

        // console.log("get products--------------------------------------")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        // Add more fields as needed
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};