const express = require('express')
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb')
const productsapi = require('./products')
const productapi = require('./product')
const create_user_api = require('./create_user')
const login_api = require('./login')
const cors = require('cors');


const app = express()
const port = 4000

app.use(cors({
    credentials: true,
    origin: true,
    origin: 'http://localhost:3000'   // IP sur laquelle tourne votre client
 }));

// Middleware to parse JSON requests
app.use(bodyParser.json());

// API endpoint to retrieve all products
app.get('/products', productsapi.getAllProducts);

// API endpoint to get a specific product by ID
app.get('/product/:id', productapi.getProductById);

// API endpoint to create a new user
app.post('/newuser', create_user_api.createUser);

// API endpoint to verify a user's login credentials
app.post('/login', login_api.verifyLogin);

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})