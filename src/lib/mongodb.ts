import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("MONGODB_URI is missing from environment variables.");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
