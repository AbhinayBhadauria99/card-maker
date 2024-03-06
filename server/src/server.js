const express = require("express");
const connect = require("./config/database");
const dotenv = require("dotenv");
const userModel = require("./models/userModel");

dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("app Running");
});

app.listen(PORT || 8000, async () => {
    console.log(`Server started on PORT: ${PORT}`);
    await connect();
    console.log("MondoDB connected");


});