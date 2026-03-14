require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/db");

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(bodyParser);
app.listen(PORT, () => console.log(`Sever is running at PORT ${PORT}`));
