const Product = require("../models/product");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ message: "Product get successfully", data: products})
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const addProduct = async (req, res) => {
    console.log("req body", req.body);
    const { name, price, quantity, categoryId } = req.body;
    try {
        const createdProduct = await Product.create({
            name, price, quantity, categoryId
        });
    
        res.status(200).json({ message: "Product created successfully", createdProduct });
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
}

module.exports = { addProduct, getProducts };