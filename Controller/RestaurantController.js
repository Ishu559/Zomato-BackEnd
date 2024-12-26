const RestaurantModel = require('../Model/RestaurantModel');
// const { mongoDbError } = require('./Routes/debugger');
module.exports.getRestaurantListByLocID = async (req,res)=> {
   let { loc_id } =req.params;
   try{
   let result = await RestaurantModel.find(
    { location_id: loc_id },
    { locality:1, name: 1, image:1, city:1 }

);
if (result.length === 0){
    res.send({ 
        status: false, 
        message: "No restaurant found" ,
});
   }
else{
    res.send({ 
        status: true, 
        restaurants: result,
    });
}
   }
    catch(error) {
        mongoDbError(error.message);
        res.status(500).send({ 
            status: false, 
            message: "Invalid id is passed",
         });
        }
    }
   

    module.exports.getRestaurantListDetailsByID = async(req,res)=> {
        let { id } = req.params;
        try{
        let result = await Restaurantmodel.findById(id);
        res.send({
            status: true,
            restaurants: result,
        });
    } catch (error){
        res.status(500).send({
            status:false,
            message: "Internal Server Error",
            error:error.message,
        })
    }
    }

    module.exports.filter = async (req, res) => {
        //filter
        //mealtype  (mandatory)
        //location 
        //cuisines
        //cost-for-two(500 (Low_Cost)to 1000(High_cost))
        //sort (Ascending / Descending)
        //page(1,2,3,4,5) (pre-page -2 restaurant)
        //sort (ASC / DESC)
        //page(1,2,3,4,5)(pre-page - 2 restaurant)

const {mealtype, location, l_cost, h_cost} = req.body;
 const filterData = {};
//  const l_cost = 500;
//  const h_cost = 1000;

 if(mealtype !== undefined) filterData['mealtype_id'] = mealtype;
 if(location !== undefined) filterData['location_id'] = location ;
 if(l_cost !== undefined && h_cost !== undefined) 
     filterData['min_price'] = { $gt: l_cost, $lt: h_cost}
    console.log(filterData);
 

   try{
   let result = await RestaurantModel.find(filterData);
if (result.length === 0){
    res.send({ 
        status: false, 
        message: "No restaurant found" ,
});
   }
else{
    res.send({ 
        status: true, 
        restaurants: result,
    });
}
   }
    catch(error) {
        mongoDbError(error.message);
        res.status(500).send({ 
            status: false, 
            message: "Invalid id is passed",
         });
        }
    }