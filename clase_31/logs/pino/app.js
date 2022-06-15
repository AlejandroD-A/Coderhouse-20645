const express = require("express");
const pino = require("pino");
const app = express();

pino.level = "info";
const transport = pino.transport({
  targets: [
    {
      level: "info",
      target: "pino-pretty", // must be installed separately
    },
    {
      level: "info",
      target: "pino/file",
      options: { destination: "info.log" },
    },
  ],
});
pino(transport);

pino.info("pino info");

// const child = pino.child({ a: "property" });
// child.info("Hola child info");
// child.info("Hola child info 2");
// child.error("Hola child error");

const myLogger = (req, res, next) => {
  logger.warn("Recurso inexistente");
  next();
};

// app.get("/sumar", (req, res) => {
//   const { num1, num2 } = req.query;
//   if (isNaN(num1) || isNaN(num2)) {
//     logger.error("Ingrese un número");
//     return res.status(500).json({ msg: "Error" });
//   }
//   logger.info("Success!");
//   res.status(200).json({ result: Number(num1) + Number(num2) });
// });

// app.use(myLogger);

// app.listen(8080, (err) => {
//   if (err) logger.error("There is a Problem!");
//   console.log("Servidor express escuchando en el puerto 8080");
// });
