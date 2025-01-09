import { db } from "@/lib/db";

export async function GET(req) {
  try {
    const [rows] = await db.execute("SELECT * FROM OrderTbl, Client where Client.id = OrderTbl.client_id and is_approved = false");
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
      const { type, product, date, hours, days, notes, payment, price, quantity, is_approved, client_id } = await req.json();
      console.log("Received data:", { type, product, date, hours, days, notes, payment, price, quantity, is_approved, client_id });
  
      if (!type || !product || !date || !hours || !days || !payment || !price || !quantity || is_approved || !client_id) {
        throw new Error("Missing required fields: product, date, hours, days, notes, payment, price, quantity, client_id");
      }
  
      // Insert the new client if the phone does not exist
      const [result] = await db.execute(
        "INSERT INTO OrderTbl (order_type, product, date, hours, days, notes, payment, price, quantity, client_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [type, product, date, hours, days, notes, payment, price, quantity, client_id]
      );
  
      // Get the ID of the newly inserted row
      const insertedId = result.insertId;
  
      console.log("Database insert result:", result);
  
      return new Response(
        JSON.stringify({ id: insertedId, type, product, date, hours, days, notes, payment, price, quantity, is_approved, client_id }),
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

export async function PATCH(req) {
  try {
    // Parse the incoming JSON payload
    const { id, is_approved } = await req.json();
    console.log("Received data for update:", { id, is_approved });

    // Validate required fields
    if (typeof id === "undefined" || typeof is_approved === "undefined") {
      throw new Error("Missing required fields: orderId, is_approved");
    }

    // Update the `is_approved` column in the database
    const [result] = await db.execute(
      "UPDATE OrderTbl SET is_approved = ? WHERE id = ?",
      [is_approved, id]
    );

    console.log("Database update result:", result);

    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({ error: "Order not found or no changes made" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id, is_approved }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during PATCH request:", error.message);
    return new Response(
      JSON.stringify({ error: "Database error: " + error.message }),
      { status: 500 }
    );
  }
}
  