// salesApi.js
const { MongoClient, ObjectId } = require('mongodb');


async function buyProduct(req, res) {
    // Connection URI to MongoDB Atlas cluster
    const uri = 'mongodb+srv://ecommerce:ecommerce@cluster0.ujesu21.mongodb.net/?retryWrites=true&w=majority'

    // MongoClient instance to connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    try {
        const db = client.db("ecommerce");
        const salesCollection = db.collection("sales_details");

        const purchase = {
            productId: req.body.product_id,
            userId: req.body.user_id,
            quantity: req.body.quantity,
        };

        const result = await salesCollection.insertOne(purchase);
        res.json(result.insertedId);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error purchasing product' });
    } finally {
        await client.close();
    }
}

// ... Other functions

module.exports = {
    buyProduct
};