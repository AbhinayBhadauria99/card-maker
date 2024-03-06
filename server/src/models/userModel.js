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
            max: 100,
            unique: true,
        },
        password: {
            type: String,
            min: 5,
        },
    },
    { timestamps: true }
);

//model
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;