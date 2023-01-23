const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// Connection URI
const uri = "Add MongoDB Connection URI";

//get post
router.get('/', async (req, res) =>{
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());    
});

// add post
 router.post('/api/post', async (req, res) =>{
    const posts = await loadPostCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date(),
    });
    console.log('this is post method 1',await posts.find({}).toArray())
    res.status(200).send();
 });

// MongoDB Connection Function 
async function loadPostCollection(){
    const client = await mongodb.MongoClient.connect(uri);
    return client.db('DatabaseName').collection('CollectionName');
}

// Export Module
module.exports = router;