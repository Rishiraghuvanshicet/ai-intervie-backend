const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DataBase Connected Successfully");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
