const mongoose = require("mongoose");
const ChainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    tables: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'table',
        required: true
    }]
});
module.exports = mongoose.model('chain', ChainSchema);