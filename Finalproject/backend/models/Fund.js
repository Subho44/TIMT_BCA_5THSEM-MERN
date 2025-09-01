const mongoose = require("mongoose");

const fundshema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    risklevel: { type: String,enum:['low','medium','high'], default:'medium' },

});
module.exports = mongoose.model("Fund",fundshema);