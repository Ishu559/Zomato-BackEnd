const MealTypesModel = require('../Model/MealTypeModel');

module.exports.getMealTypeList =  async (req,res)=> {
    let result = await MealTypesModel.find();

    res.send({
        status: true,
        meal_types: result,
    })

}