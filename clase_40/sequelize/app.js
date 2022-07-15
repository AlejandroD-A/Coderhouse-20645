const express = require("express");
const app = express();
const routes = require("./routes");
const db = require("./db");
const models = require("./models");

app.use(express.json());
app.use("/api", routes);

db.sync()
  .then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(3000, () =>
      console.log("Servidor escuchando en el puerto 3000")
    );
  })
  .catch(console.error);
