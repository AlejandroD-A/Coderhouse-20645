const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT"],
  })
);

app.put("/messages1", (req, res) => {
  res.json({ message: "Hola mundo" });
});

app.put("/messages2", (req, res) => {
  res.json({ message: "Hola mundo" });
});

app.listen(3000, () => {
  console.log("Server up");
});
