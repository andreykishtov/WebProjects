const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LocationsSchema = new Schema({
    title: String,
    type: String,
    generalDesc: String,
    guestAccess: String,
    owner: String,
    price: Number,
    currency: String,
    amenities: [
        {
            type: String
        }
    ],
    imageUrl: {
        type: String
    },
    ownerId: String,
    address: {
        country: String,
        city: String,
        street: String,
        number: String,
        lat: Number,
        lng: Number
    },
    theSpace: {
        description: String,
        guests: Number,
        beds: Number,
        bedrooms: Number
    },
    reviews: [
        {
            title: String,
            rating: Number,
            // userId: Number
            content: String,
            rating: Number,
            date: String
        }
    ],
    occupancy: {
        type: String
    }
});

const location = mongoose.model('location', LocationsSchema);

module.exports = location;
