import { db } from "@/lib/db";

export async function GET(req) {
  try {
    const [rows] = await db.execute(`
      SELECT 
        OrderTbl.id AS order_id,
        OrderTbl.order_type,
        OrderTbl.product,
        OrderTbl.date,
        OrderTbl.hours,
        OrderTbl.days,
        OrderTbl.notes,
        OrderTbl.payment,
        OrderTbl.price,
        OrderTbl.quantity,
        OrderTbl.is_approved,
        OrderTbl.client_id,
        Client.name AS client_name,
        Client.phone,
        Client.email
      FROM 
        OrderTbl
      INNER JOIN 
        Client 
      ON 
        Client.id = OrderTbl.client_id
      WHERE 
        OrderTbl.is_approved = false
    `);
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
  
      if (!type || !product || !date || !hours || !days || !payment || !price || !quantity || !is_approved || !client_id) {
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
    const { order_id, is_approved } = await req.json();
    console.log("Received data for update:", { order_id, is_approved });

    if (!order_id || typeof is_approved === "undefined") {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Check current value in the database
    const [rows] = await db.execute(
      "SELECT is_approved FROM OrderTbl WHERE id = ?",
      [order_id]
    );
    console.log("Current value in DB:", rows);

    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ error: "Order not found" }),
        { status: 404 }
      );
    }

    // Execute the update query
    const [result] = await db.execute(
      "UPDATE OrderTbl SET is_approved = ? WHERE id = ?",
      [is_approved, order_id]
    );

    console.log("Update query result:", result);

    if (result.affectedRows > 0) {
      return new Response(
        JSON.stringify({ success: true, order_id, is_approved }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "No rows updated" }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error during PATCH request:", error.message);
    return new Response(
      JSON.stringify({ error: "Database error: " + error.message }),
      { status: 500 }
    );
  }
}  

export async function DELETE(req) {
  try {
    // Extract the order ID from the request body
    const { order_id } = await req.json();

    if (!order_id) {
      throw new Error("Missing required field: order_id");
    }

    // Execute the DELETE query
    const [result] = await db.execute("DELETE FROM OrderTbl WHERE id = ?", [order_id]);

    // Check if the row was successfully deleted
    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({ error: "No order found with the provided ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Order successfully deleted", order_id }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during DELETE request:", error.message);
    return new Response(
      JSON.stringify({ error: "Database error: " + error.message }),
      { status: 500 }
    );
  }
}

  