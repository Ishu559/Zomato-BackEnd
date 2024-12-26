const express = require('express');
const router = express.Router();  // Use router, not app

const location = require('../controller/LocationController');
const restaurant = require('../controller/RestaurantController');
const MealType = require('../Controller/MealTypeController');
const order = require('../Controller/OrdersController');
const menuitems = require('../Controller/MenultemController')


// Sample routes
router.get('/', (req, res) => {
    res.send('Hello, this is Express JS!');
});

router.get('/about', (req, res) => {
    res.send('Hello, this is the Express JS about page');
});

router.get('/contact', (req, res) => {
    res.send('Hello, this is the Express JS contact page');
});

// API routes
router.get('/api', location.welcome);
router.get('/api/get-location-list', location.getLocationList);

// Restaurant routes
router.get('/api/get-restaurant-list-loc-id/:loc_id', restaurant.getRestaurantListByLocID);
router.get("/api/get-restaurant-details-by-id/:id", restaurant.getRestaurantListDetailsByID);
router.post('/api/filter', restaurant.filter);

// MealType routes
router.get('/api/get-meal-type-list', MealType.getMealTypeList);

// menu items
router.get("/api/get-menu-items-list-by-rest-id/:rest_id",menuitems.getMenuItemsByRestID);

// Orders routes
router.post('/api/save-orders', order.saveNewOrder);

module.exports = router;  // Export the router, not app
