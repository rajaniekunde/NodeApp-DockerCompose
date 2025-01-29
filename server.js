const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL Connection
const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "postgres",
  password: "password",
  port: 5432,
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`Database Connected: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database Connection Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
