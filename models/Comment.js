const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const commentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },

    title: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String,
        trim: true,
        required: true
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
