/*
order_id: String
name: String
mobile: Number
email: String
order_list: Array
payment_Id: String
payment_Status:Boolean

*/


const { Schema , model} = require('mongoose');
const OrdersSchema = new Schema({
    order_id: { type: String},
    name: {type:String},
    mobile: {type: Number},
    email: {type:String},
    order_list: {type: Array},
    payment_Id: {type: String},
    payment_Status: {type: Boolean },

});
const OrdersModel = model('order', OrdersSchema, 'orders');

module.exports = OrdersModel;