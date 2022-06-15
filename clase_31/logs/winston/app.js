const express = require("express");
const app = express();

const winston = require("winston");

const logger = winston.createLogger({
  level: "warn",
  transports: [
    new winston.transports.Console({ level: "verbose" }),
    new winston.transports.File({ filename: "info.log", level: "error" }),
  ],
});

const myLogger = (req, res, next) => {
  logger.warn("Recurso inexistente");
  next();
};

app.get("/sumar", (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("Ingrese un número");
    return res.status(500).json({ msg: "Error" });
  }
  logger.info("Success!");
  res.status(200).json({ result: Number(num1) + Number(num2) });
});

app.use(myLogger);

app.listen(8080, (err) => {
  if (err) logger.error("There is a Problem!");
  console.log("Servidor express escuchando en el puerto 8080");
});
