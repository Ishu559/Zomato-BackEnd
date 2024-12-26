const MenuItemsModel = require('../Model/MenultemsModel')
const mongoose = require('mongoose'); // Add mongoose for ObjectId conversion

module.exports.getMenuItemsByRestID = async (request, response) => {
    let { rest_id } = request.params;

    try {
        // Ensure rest_id is a valid ObjectId
        const objectId = mongoose.Types.ObjectId(rest_id);

        let result = await MenuItemsModel.find({ restaurantId: objectId });

        response.send({
            status: true,
            menu_items: result,
        });
    } catch (error) {
        console.error("Error fetching menu items:", error); // Log the error
        response.status(500).send({
            status: false,
            message: "An error occurred while fetching the menu items.",
            error: error.message,
        });
    }
};
