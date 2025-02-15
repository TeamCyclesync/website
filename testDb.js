const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI || "mongodb+srv://cyclesync:cyclesync101@cyclesync.7s3gj.mongodb.net/?retryWrites=true&w=majority&appName=CycleSync";

async function testConnection() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log("✅ Connected to MongoDB");
        const db = client.db("cyclesync"); // Ensure correct DB name
        console.log("🛢️ Databases:", await db.admin().listDatabases());
        await client.close();
    } catch (error) {
        console.error("❌ Connection error:", error);
    }
}

testConnection();
