import { db } from "@/lib/db";

export async function GET(req) {
  try {
    const [rows] = await db.execute("SELECT * FROM Client");
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Database error: " + error.message }),
      { status: 500 }
    );
  }
}
  
export async function POST(req) {
    try {
      const { name, email, phone } = await req.json();
      console.log("Received data:", { name, email, phone });
  
      if (!name || !phone) {
        throw new Error("Missing required fields: name or phone");
      }
  
      // Check if the phone already exists in the database
      const [existing] = await db.execute(
        "SELECT id FROM Client WHERE phone = ?",
        [phone]
      );
  
      if (existing.length > 0) {
        // If phone exists, return the existing client's ID
        return new Response(
          JSON.stringify({ id: existing[0].id, message: "Client already exists" }),
          { status: 200 }
        );
      }
  
      // Insert the new client if the phone does not exist
      const [result] = await db.execute(
        "INSERT INTO Client (name, email, phone) VALUES (?, ?, ?)",
        [name, email, phone]
      );
  
      // Get the ID of the newly inserted row
      const insertedId = result.insertId;
  
      console.log("Database insert result:", result);
  
      return new Response(
        JSON.stringify({ id: insertedId, name, email, phone }),
        { status: 201 }
      );
    } catch (error) {
      console.error("Error during POST request:", error.message);
      return new Response(
        JSON.stringify({ error: "Database error: " + error.message }),
        { status: 500 }
      );
    }
  }
  