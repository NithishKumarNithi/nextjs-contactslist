import { getDb } from "@/app/lib/database";
import { contacts as testContacts } from "@/app/lib/placeholder-data";

export async function GET() {
  try {
    // let db = await getDb;
    // let contacts = db.collection("contacts");
    // await contacts.insertMany(testContacts);
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.log("Database Error : ", error);
    return Response.json({ error: "Database error" }, { status: 500 });
  }
}
