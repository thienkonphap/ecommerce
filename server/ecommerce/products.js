const { MongoClient } = require('mongodb')




async function getAllProducts(req, res) {
    // Connection URI to MongoDB Atlas cluster
    const uri = 'mongodb+srv://ecommerce:ecommerce@cluster0.ujesu21.mongodb.net/?retryWrites=true&w=majority'

    // MongoClient instance to connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    try {

        const db = client.db("ecommerce");
        const collection = db.collection("product");
        const products = await collection.find().toArray();
        res.json(products);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error retrieving products' });
    } finally {
        await client.close();
    }
}
module.exports = {
    getAllProducts,
};