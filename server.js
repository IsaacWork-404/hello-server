const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/health", function (req, res) {
  res.json({
    status: "OK",
  });
});

app.post("/message", function (req, res) {
  const userMessage = req.body.message;

  if (typeof userMessage !== "string" || userMessage.trim() === "") {
    return res.status(400).json({
      received: false,
      error: "A non-empty message is required.",
    });
  }

  res.status(200).json({
    received: true,
    message: userMessage,
  });
});

// Start server
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
