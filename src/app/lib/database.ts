import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI!);

export async function ConnectDB() {
  let db = null;
  try {
    await client.connect();
    db = client.db(process.env.MONGO_DB);
    console.log("Database established");
  } catch (error) {
    console.error("Database Error : ", error);
    throw new Error("Database connection error");
  }

  return db;
}

export let getDb = Promise.resolve(ConnectDB());
