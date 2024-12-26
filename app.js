const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const APIRoutes = require('./Routes/APIRouter');  // Import the APIRoutes
const {dbAfter, dbBefore} = require('./Routes/debugger')
require('dotenv').config();

const app = express();
const PORT = 4000;

// Correct MongoDB URI with URL-encoded password
// const mongoURI = "mongodb+srv://iswarya:raj123@cluster0.ntjlh.mongodb.net/Ishu";
const mongoURI= "mongodb://localhost:27017/ISHU "

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the API routes
app.use('/', APIRoutes);  // Use APIRoutes here, without defining app in APIRoutes

// Connect to MongoDB Atlas
dbBefore("Connecting to db");
mongoose
  .connect(mongoURI)
  .then(() => dbAfter('DB Connected Successfullly'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

// Handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
