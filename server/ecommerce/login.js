const { MongoClient } = require('mongodb')





async function verifyLogin(req, res) {
    try {
        // Connection URI to MongoDB Atlas cluster
        const uri = 'mongodb+srv://ecommerce:ecommerce@cluster0.ujesu21.mongodb.net/?retryWrites=true&w=majority'

        // MongoClient instance to connect to MongoDB
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            // Access the "users" collection in the "mydatabase" database
        const db = client.db("ecommerce")
        const collection = db.collection("user")

        // Find the user with the specified email and password
        const user = await collection.findOne({
            email: req.body.email,
            password: req.body.password
        })

        // If no matching user is found, return an error response
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' })
        }

        // Return the ID of the authenticated user as a JSON response
        res.json(user._id)
    } catch (e) {
        console.error(e)
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close()
    }
}

module.exports = { verifyLogin };