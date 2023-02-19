const mongoose = require("mongoose");
const Plants = mongoose.Schema ({
  name: {
    type: String
  },
  description: {
    type: String
  },
  imageURL: {
    type: String
  },
})

module.exports = mongoose.model("Product", Plants);