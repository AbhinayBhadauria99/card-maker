const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI); //sample_dev is the collection which we want to make
}

module.exports = connect;