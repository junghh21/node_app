const express = require("express");
const app = express();

// Define a route
app.get("/aa", (req, res) => {
  res.send("Welcome to your Express server!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
