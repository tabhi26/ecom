const { addCategory } = require("../controllers/categoryController");

const router = require("express").Router();

router.get('/healthCheck', (req, res) => {res.send("hello from server")});

router.post('/addCategory', addCategory);

// router.post('/auth/login', login);

module.exports = router;