const mongoose = require("mongoose");
const Plants = mongoose.Schema({
  name: {
    type: String,
  },
  heading: {
    type: String
  },
  shortDescription: {
    type: String,
  },
  description: {
    type: String,
  },
  imageURL1: {
    type: String,
  },
  imageURL2: {
    type: String,
  },
});

module.exports = mongoose.model("Plants", Plants);
