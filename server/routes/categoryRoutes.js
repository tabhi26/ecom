const { addCategory, getAllCategory } = require("../controllers/categoryController");

const router = require("express").Router();

router.get('/getAllCategory', getAllCategory);

router.post('/addCategory', addCategory);

// router.post('/auth/login', login);

module.exports = router;