import { db } from '@/lib/db';
import mysql from "mysql2/promise";

// export async function GET(req) {
//   const [rows] = await db.query('SELECT * FROM cars');
//   console.log(JSON.stringify(rows));

//   return new Response(JSON.stringify(rows), { status: 200 });
// }

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST, // Your database host
  user: process.env.DATABASE_USER,    // Your database user
  password: process.env.DATABASE_PASSWORD, // Your database password
  database: process.env.DATABASE_NAME, // Your database name
  port: process.env.PORT_NUMBER,
  connectTimeout: 20000,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  ssl: { rejectUnauthorized: true }, // Enable SSL if needed
});


export const getCars = async (req, res) => {
  // if (req.method === "GET") {
    try {
      const [rows] = await pool.query("SELECT * FROM cars");
      res.status(200).json(rows);
    } catch (error) {
      console.error(error.message); // Log specific error
      res.status(500).json({ error: "Database connection failed" });
    }
  // } else {
  //   res.status(405).json({ error: "Method not allowed" });
  // }
}

// export async function POST(req) {
//   const { name, email } = await req.json();
//   await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
//   return new Response(JSON.stringify({ message: 'User added' }), { status: 201 });
// }