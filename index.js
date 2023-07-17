const express = require("express");
const mysql = require("mysql");

// Create MySQL connection
const connection = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9633309",
  password: "zcyYbqTjpV",
  database: "sql9633309",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database!");
});

// Create Express app
const app = express();

// Define API endpoints
app.get("/", (req, res) => {
  connection.query("SELECT * FROM test", (err, rows) => {
    if (err) {
      console.error("Error executing query: ", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(rows);
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
