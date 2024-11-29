const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

// user middleware
app.use(cors())
app.use(express.json())

// mongoDB cloud server database

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ldsdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create coffee collection
    const coffeeCollection = client.db('coffee-cards').collection('coffee')

    app.get('/coffee' , async(req , res)=>{
        const cursor =  coffeeCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/coffee/:id' , async(req , res)=>{
      const id = req.params.id ;
      const cursor = {_id: new ObjectId(id)};
      const result = await coffeeCollection.findOne(cursor);
      res.send(result)
    })

    app.post('/coffee' , async(req , res)=>{
        const coffee = req.body;
        console.log(coffee)

        const result = await coffeeCollection.insertOne(coffee)
        res.send(result)
    })

    app.put('/coffee/:id' , async(req , res)=>{
      const id = req.params.id;
      const cursor = {_id: new ObjectId(id)};
      const updateData = req.body;
      const option = {upsert: true};
      const updateDoc = {
        $set: updateData 
      }
      const result = await coffeeCollection.updateOne(cursor , updateDoc , option);
      res.send(result)
    })

    app.delete('/coffee/:id' , async(req , res)=>{
      const id = req.params.id;
      const cursor = {_id: new ObjectId(id)};
      const result = await coffeeCollection.deleteOne(cursor);
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/' , (req , res)=>{
    res.send('this is a server')
})
app.listen(port , ()=>{
    console.log('server is running')
})