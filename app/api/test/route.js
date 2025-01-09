import { db } from "@/lib/db";


export async function POST(req) {
    try {
      const [result] = await db.execute(
        "INSERT INTO Test (name) VALUES ('first test')");
  
      console.log("Database insert result:", result);
      return new Response(
        JSON.stringify('first test'),
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