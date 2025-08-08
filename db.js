const express = require("express");
const db = require("./db"); // path to the db connection file
const app = express();
const PORT = 3000;

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Welcome to the CRUD app!");
});

// Connect to MongoDB and start server
db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
    return;
  }

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
