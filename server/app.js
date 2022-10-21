const express = require('express');
const cors = require('cors');
const {port} = require('./config/config');
const dbConnect = require('./config/db');
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
// app.use("/api/category", orderRoutes);

try {
    dbConnect();
    app.listen(port, () => console.log(`Server is runing at ${port}`));
} catch (err) {
    console.log(err);
};