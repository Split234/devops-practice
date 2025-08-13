const http = require('http');
const { MongoClient } = require('mongodb');

const uri = 'mongodb://mongo:27017';
const client = new MongoClient(uri);

const server = http.createServer(async (req, res) => {
  try {
    await client.connect();
    const db = client.db('test');
    const collection = db.collection('test');
    await collection.insertOne({ message: 'Hello' });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Connected to MongoDB and inserted data!\n');
  } catch (error) {
    res.statusCode = 500;
    res.end('Error connecting to MongoDB\n');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
