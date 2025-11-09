const mongoose = require("mongoose");
const TableSchema = new mongoose.Schema({
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
    dieType: {
        type: String,
        required: true
    },
    rows: [{
        roll: {
            type: Number,
            required: true
        },
        entry: {
            type: String,
            required: true
        }
    }],
    collection: {
        type: String,
        required: true,
        defaut: 'General'
    }
});
module.exports = mongoose.model('table', TableSchema);