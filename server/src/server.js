const express = require("express");
const connect = require("./config/database");
const dotenv = require("dotenv");

const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json()); // we are using it instead of body-parser for active functioning testing of postman

app.use(cors());

const userRouter = require("./routes/index");

app.listen(PORT || 8000, async () => {
    console.log(`Server started on PORT: ${PORT}`);
    await connect();
    console.log("MondoDB connected");
});

app.use("/api/user", userRouter);