const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SnippetSchema = new Schema({
    code: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        default: 'HTML',
    },
    theme: {
        type: String,
        required: true,
        default: 'vs-light',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('snippets', SnippetSchema);