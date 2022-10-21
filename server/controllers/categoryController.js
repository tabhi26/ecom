const Category = require("../models/category");

const getAllCategory = async (req, res) => {
    try {
        const categorys = await Category.find();
        res.status(200).json({ message: "Success get all category", data: categorys})
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const addCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const createdCategory = await Category.create({
            name,
            products: []
        });
    
        res.status(200).json({ message: "Category created successfully", createdCategory });
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
}

module.exports = { addCategory, getAllCategory };