const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    title: String,
    rating: Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    content: String,
    rating: Number,
    date: String,
    location: {
        type: Schema.Types.ObjectId,
        ref: 'location'
    }
});

const Review = mongoose.model('review', ReviewSchema);

module.exports = Review;
