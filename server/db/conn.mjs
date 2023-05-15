import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://admin:admin@cluster1.uym5gah.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Connected successfully");
} catch(e) {
  console.error(e);
}

let db = conn.db("Players");

export default db;