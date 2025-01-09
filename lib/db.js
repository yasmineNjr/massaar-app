import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,  // Number of concurrent connections
  queueLimit: 0,  // No limit for queued connections
  connectTimeout: 20000, // 20 seconds
  acquireTimeout: 20000, // 20 seconds
});

// import mysql from "mysql2/promise";

// const pool = mysql.createPool({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
// });

// export default pool;
