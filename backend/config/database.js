const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("Connected to database"))
    // error handled in server.js
    
}

module.exports = connectDB;