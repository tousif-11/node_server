const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect("mongodb+srv://ajtousif:EOlH6XvcXh0pOw0m@cluster0.cpmylnd.mongodb.net/helley");

  console.log("connected to DB")

}

module.exports = connectDB
