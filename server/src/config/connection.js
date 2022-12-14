import mysql from "mysql"; 
import env from "dotenv"

env.config({ path: "././.env" });

const db_connection = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
db_connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database ");
  }
});

export default db_connection
