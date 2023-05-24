const { MongoClient, ObjectId } = require('mongodb');




async function getProductById(req, res) {
    // Connection URI to MongoDB Atlas cluster
    const uri = 'mongodb+srv://ecommerce:ecommerce@cluster0.ujesu21.mongodb.net/?retryWrites=true&w=majority'

    // MongoClient instance to connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    try {
        const db = client.db("ecommerce");
        const collection = db.collection("product");
        const product = await collection.findOne({ _id: new ObjectId(req.params.id) });
        const salesCollection = db.collection("sales");
        const usersCollection = db.collection("user");

        // Find the product with the specified ID
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Find all sales documents that match the product ID and extract the comments
        const sales = await salesCollection.find({ product_id: req.params.id }).toArray();


        // Find the product with the specified ID
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        // Retrieve user information for each comment
        const commentsWithUsers = await Promise.all(sales.map(async(sale) => {
            const user = await usersCollection.findOne({ _id: new ObjectId(sale.user_id) });
            return { comment: sale.comments, username: user.username, avatar: user.avatar };
        }));
        // Add the comments to the product object
        product.comments = commentsWithUsers;

        // Return the product with comments as a JSON response
        res.json(product);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error retrieving product' });
    } finally {
        await client.close();
    }
}

module.exports = {
    getProductById,
};