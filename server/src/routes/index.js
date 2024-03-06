const express = require("express");
const mongoose = require('mongoose');
const User = require("../models/userModel");

const router = express.Router();

//create
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
