const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/health", function (req, res) {
  res.status(200).json({
    status: "OK",
    message: "Server is healthy!",
  });
});

app.use(express.json());

app.post("/message", function (req, res) {
  const userMessage = req.body.message;

  res.status(200).json({
    received: true,
    message: userMessage,
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
