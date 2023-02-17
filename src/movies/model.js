const { Schema, model } = require("mongoose");

const schema = new Schema({
    name: String,
    year: Number,
    duration: Number
})


module.exports = model('Movie', schema);
