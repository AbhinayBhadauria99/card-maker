const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        userEmail: {
            type: String,
            required: true,
            max: 100,
            unique: true
        },
        age: {
            type: Number,
        },
    },
    { timestamps: true }
);

//model
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;