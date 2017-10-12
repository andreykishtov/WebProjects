const Locations = require('../models/locations');

/*
1. getLocations GET/locations
2. getLocation GET/locations/:id
3. addLocation POST => /locations
4. updateLocation PUT => /locations/:id 
5.deleteLocation DELETE => /locations/:id
*/

module.exports = {
    getLocations: async (req, res) => {
        try {
            const locations = await Locations.find({}, '-__v');
            res.status(200).json(locations);
        } catch (error) {
            res.send(error);
        }
    },
    addLocation: async (req, res) => {
        const newLocations = new Locations(req.body);
        try {
            const location = await newLocations.save();
            res.status(200).json({ location, message: 'Updated Successfully' });
        } catch (error) {
            res.send(error);
        }
    },
    getLocation: async (req, res) => {
        try {
            const location = await Locations.findById({ _id: req.params.homeId }, '-__v');
            res.status(200).json(location);
        } catch (error) {
            res.send(error);
        }
    }
};