const express = require("express");
const connect = require("./config/database");
const dotenv = require("dotenv");
const userModel = require("./models/userModel");
const User = require("./models/userModel");

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json()); // we are using it instead of body-parser for active functioning testing of postman


//create
app.post("/", async (req, res) => {
    const { name, userEmail, password } = req.body;


    try {
        const userAdded = await User.create({
            name: name,
            userEmail: userEmail,
            password: password,
        });
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})

//read
app.get("/", async (req, res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT || 8000, async () => {
    console.log(`Server started on PORT: ${PORT}`);
    await connect();
    console.log("MondoDB connected");
});