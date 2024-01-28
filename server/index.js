const express = require('express');  // framework to create web server
const mongoose = require('mongoose'); // library to connect to mongodb database
const bodyParser = require('body-parser'); // middleware to parse incoming request bodies
const cors = require('cors'); // middleware to enable cross-origin resource sharing
require('dotenv').config()  // to load environment variable from .env

const app = express(); // create express app
app.use(bodyParser.json()); // parse incoming request with JSON payload
app.use(bodyParser.urlencoded({ extended: true })); // parse incoming requests with urlencoded payloads
app.use(cors()); // enable cross-origin resource sharing for all routes


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) // connets to mongodb database using mongodb_uri environment variable 
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

  // mongoose schema for user collection in database
  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  });
  
  const User = mongoose.model('User', userSchema); // mongoose model for user collection based on userschema

  // route for handling POST requests to /api/registration
// earlier it was app.post('/api/registration', async (req, res) => {...} ) but we changed it to '/'
  app.post('/', async (req, res) => {
    try {
      // Check if the email address is already in use
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Create a new user document
      const user = new User(req.body);
  
      // Save the user to the database
      await user.save();
  
      // Send a success response
      return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('An error occurred while registering the user:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  
const PORT = process.env.PORT || 3000; // port number that server should listen on if environment variable port not set

//  start the server and listen for incoming requests on specified port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
