
Here is an implementation for the DBClient class in utils/db.js. Follow this code to set up the DBClient class:

utils/db.js
javascript
Copy code
import { MongoClient } from 'mongodb';
import { promisify } from 'util';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    const url = `mongodb://${host}:${port}`;
    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.client.connect().catch((error) => console.error('MongoDB connection error:', error));
    this.db = this.client.db(database);
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
Explanation:
MongoDB Connection:

MongoClient is initialized using environment variables or default values.
The connection uses useUnifiedTopology for stability.
Methods:

isAlive: Returns whether the MongoDB connection is active.
nbUsers: Returns the count of documents in the users collection.
nbFiles: Returns the count of documents in the files collection.
Error Handling:

Connection errors are logged to the console using .catch.
