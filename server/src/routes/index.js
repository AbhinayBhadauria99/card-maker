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

//get specific user
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const showSingleUser = await User.findById({ _id: id });
        res.status(200).json(showSingleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

//delete
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await User.findByIdAndDelete({ _id: id });
        res.status(200).json(deleteUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

//update
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, userEmail, password } = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true, });
        res.status(200).json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
