const OrdersModel = require('../Model/OrdersModel');

module.exports.saveNewOrder = async (req, res)=> {
    var data = req.body;


    try{

        var newOrder = new OrdersModel({
            order_id: data.order_id,
            name: data.name,
            mobile: data.mobile,
            email: data.email,
            order_list: data.order_list,
            payment_Id: data.payment_Id,
            payment_Status: data.payment_Status,
        
        });
        await newOrder.save();
        res.status(200).send({
            status: true,
            message: 'Order Place successfully' ,
        });
    
    } catch(error){
        res.status(500).send({
            status:false,
            message: "Internal Server Error",
            error:error.message,
        });

    }
};