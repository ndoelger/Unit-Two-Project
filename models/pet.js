const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = {
  image: { type: String, default: "" },
  name: { type: String, default: "" },
  type: { type: String, default: "" },
  breed: { type: String, default: "" },
  age: { type: Number, default: 1 },
  birthday: {
    type: Date,
    default: new Date(),
  },
};

module.exports = mongoose.model("Pet", petSchema);
