const { addProduct, getProducts } = require("../controllers/productController");

const router = require("express").Router();

router.get('/getProducts', getProducts);

router.post('/addProduct', addProduct);

module.exports = router;