// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config()

// Import other routes as needed

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


// Enable CORS for all routes
const corsOptions = {
    origin: 'http://localhost:3030', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow only GET and POST requests
};

app.use(cors(corsOptions));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB ');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB :', error);
    });


// Routes
app.use('/api/', productRoutes);
app.use('/api/auth/', authRoutes);

// Use other routes as needed

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});