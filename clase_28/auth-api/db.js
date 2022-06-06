const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://diego:prueba@cluster0.gliki.mongodb.net/?retryWrites=true&w=majority"
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb connection stablished");
});

connection.on("error", (err) => {
  console.log(err);
  process.exit(0);
});
