const mongoose = require('./connection');

const PendingTr = new mongoose.Schema({
    trNumber: String,
    issues: String,
    isComplete: Boolean,
    comments: String
});

const Tr = mongoose.model('trailers', PendingTr);

module.exports = Tr;