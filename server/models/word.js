const mongoose = require('mongoose')

const Word = mongoose.Schema({
    word1: {type: String},
    word2: {type: String},
    sum: {type: Number}
})

module.exports = mongoose.model('Result', Word)