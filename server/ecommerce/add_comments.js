const { MongoClient, ObjectId } = require('mongodb');
const Sentiment = require('sentiment');

// commentsApi.js

// ... Other imports and code

async function addComment(req, res) {
    // Connection URI to MongoDB Atlas cluster
    const uri = 'mongodb+srv://ecommerce:ecommerce@cluster0.ujesu21.mongodb.net/?retryWrites=true&w=majority'

    // MongoClient instance to connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    try {
        // Access the "users" collection in the "mydatabase" database
        const db = client.db("ecommerce")
        const salesCollection = db.collection("sales");

        const comment = {
            product_id: req.body.product_id,
            user_id: req.body.user_id,
            comments: req.body.comment
        };
        const result = await salesCollection.insertOne(comment);




        const sentiment = new Sentiment();
        const comments = await db.collection('sales').find({}).toArray();
        let totalScore = 0;
        let commentCount = 0;

        for (const comment of comments) {
            if (!comment) {
                const result_analysis = sentiment.analyze(comment.comments);
                const score = result_analysis.score;
                console.log(comment.comments, " ", score)
                totalScore += score;
                commentCount++;
            }

        }

        const averageScore = totalScore / commentCount;

        // Update the product collection with the average score
        await db.collection('product').updateOne({ _id: new ObjectId(req.body.product_id) }, // Replace 'productId' with the appropriate identifier for your product
            { $set: { rating: averageScore } }
        );
        res.json(result.insertedId);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error adding comment' });
    } finally {
        await client.close();
    }
}

module.exports = {
    addComment
};