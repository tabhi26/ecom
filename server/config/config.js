require('dotenv').config();

const dbUrl = process.env.Mongo_Uri;
const port = process.env.PORT;

module.exports = { dbUrl, port };