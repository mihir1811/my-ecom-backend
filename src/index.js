// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

const PORT = 5000;

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
const MONGODB_URI = 'mongodb+srv://mihirroxontechnologies:RtCUaAduWcOZizHf@cluster0.k6o8ccp.mongodb.net/';
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });


// Routes
app.use('/api/', productRoutes);
app.use('/api/auth/', authRoutes);

// Use other routes as needed

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});