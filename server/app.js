const express = require('express');
const cors = require('cors');
const {port} = require('./config/config');
const dbConnect = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

dbConnect();
app.listen(port,()=> console.log(`server is runing at ${port}`));