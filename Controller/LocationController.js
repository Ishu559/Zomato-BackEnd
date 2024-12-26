

const LocationsModel = require('../Model/LocationModel'); // Example model

module.exports.welcome = (req, res) => {
    res.send('Welcome to the API');
};

module.exports.getLocationList = async (req, res) => {
    try {
        const locations = await LocationsModel.find({country_name:"India"}); // Example of fetching data
        res.send({ status: true, locations });
    } catch (error) {
        res.status(500).send({ status: false, message: 'Error fetching locations' });
    }
};