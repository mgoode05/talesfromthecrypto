const mongoose = require('mongoose');
const Schema = mongoose.Schema

const traderSchema = Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    stocklist: [{type: ObjectId}]
})


module.exports = mongoose.model(traderSchema);