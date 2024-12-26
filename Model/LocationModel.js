//import schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create a schema
const LocationsSchema = new Schema({
    name:{type:String},
    city_id:{type:Number},
    location_id:{type:Number},
    city: {type: String},
    country_name: { type: String},
    // pinCode: { type: Number}
});
//create a model
//singular => location
//plural => locations
const LocationsModel = mongoose.model(
    'locations',LocationsSchema,'location');
//location
module.exports = LocationsModel;