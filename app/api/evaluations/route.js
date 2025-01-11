import { db } from "@/lib/db";

export async function GET(req) {
  try {
    const [rows] = await db.execute(`
        SELECT 
            Evaluation.id AS e_id,
            Evaluation.e_date AS date,
            Evaluation.level,
            Evaluation.text,
            Evaluation.is_approved,
            Client.name AS client_name,
            Client.phone
        FROM 
            Evaluation
        LEFT JOIN 
            Client 
        ON 
            Client.id = Evaluation.client_id
        
        `);
        // WHERE 
        // Evaluation.is_approved = 0  
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
    const { e_date,	level,	text,	is_approved,	client_id } = await req.json();
    console.log("Received data:", { e_date,	level,	text,	is_approved,	client_id });

    // if (!e_date || !level || !text || !is_approved || !client_id) {
    //   throw new Error("Missing required fields: e_date,	level,	text,	is_approved,	client_id");
    // }

    // Insert the new client if the phone does not exist
    const [result] = await db.execute(
      "INSERT INTO Evaluation (e_date,	level,	text,	is_approved,	client_id) VALUES (?,	?, ?,	?, ?)",
      [e_date,	level,	text,	is_approved,	client_id]
    );

    // Get the ID of the newly inserted row
    const insertedId = result.insertId;

    console.log("Database insert result:", result);

    return new Response(
      JSON.stringify({ id: insertedId, e_date, level, text,	is_approved, client_id }),
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
      const { e_id, is_approved } = await req.json();
      console.log("Received data for update:", { e_id, is_approved });
  
      if (!e_id || typeof is_approved === "undefined") {
        return new Response(
          JSON.stringify({ error: "Missing required fields" }),
          { status: 400 }
        );
      }
  
      // Check current value in the database
      const [rows] = await db.execute(
        "SELECT is_approved FROM Evaluation WHERE id = ?",
        [e_id]
      );
      console.log("Current value in DB:", rows);
  
      if (rows.length === 0) {
        return new Response(
          JSON.stringify({ error: "Evaluation not found" }),
          { status: 404 }
        );
      }
  
      // Execute the update query
      const [result] = await db.execute(
        "UPDATE Evaluation SET is_approved = ? WHERE id = ?",
        [is_approved, e_id]
      );
  
      console.log("Update query result:", result);
  
      if (result.affectedRows > 0) {
        return new Response(
          JSON.stringify({ success: true, e_id, is_approved }),
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
      // Extract the evaluation ID from the request body
      const { e_id } = await req.json();
  
      if (!e_id) {
        throw new Error("Missing required field: e_id");
      }
  
      // Execute the DELETE query
      const [result] = await db.execute("DELETE FROM Evaluation WHERE id = ?", [e_id]);
  
      // Check if the row was successfully deleted
      if (result.affectedRows === 0) {
        return new Response(
          JSON.stringify({ error: "No evaluation found with the provided ID" }),
          { status: 404 }
        );
      }
  
      return new Response(
        JSON.stringify({ message: "Evaluation successfully deleted", e_id }),
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