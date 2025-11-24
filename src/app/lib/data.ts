import { getDb } from "./database";

export async function fetchContacts() {
  let db = await getDb;

  try {
    let cursor = db.collection("contacts").find({});
    let docs = await cursor.toArray();
    return docs;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch contacts");
  }
}
