const { MongoClient } = require('mongodb')




async function createUser(req, res) {
    try {
        // Connection URI to MongoDB Atlas cluster
        const uri = 'mongodb+srv://ecommerce:ecommerce@cluster0.ujesu21.mongodb.net/?retryWrites=true&w=majority'

        // MongoClient instance to connect to MongoDB
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            // Access the "users" collection in the "mydatabase" database
        const db = client.db("ecommerce")
        const collection = db.collection("user")
            // Check if the user with the provided email already exists
        const existingUser = await collection.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        // Create a new user object with the provided data
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }

        // Insert the new user into the "users" collection
        const result = await collection.insertOne(user)

        // Return the ID of the newly created user as a JSON response
        res.json(result.insertedId)
    } catch (e) {
        console.error(e)
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close()
    }
}

module.exports = { createUser };