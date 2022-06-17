const log4js = require("log4js");
const express = require("express");
const app = express();

log4js.configure({
  appenders: {
    // defino dos soportes de salida de datos
    consola: { type: "console" },
    archivo: { type: "file", filename: "errores.log" },
    // defino sus niveles de logueo
    loggerConsola: {
      type: "logLevelFilter",
      appender: "consola",
      level: "info",
    },
    loggerArchivo: {
      type: "logLevelFilter",
      appender: "archivo",
      level: "error",
    },
  },
  categories: {
    default: {
      appenders: ["loggerConsola"],
      level: "all",
    },
    file: {
      appenders: ["loggerArchivo"],
      level: "all",
    },
  },
});

const logger = log4js.getLogger();
const loggerFile = log4js.getLogger("file");

const myLogger = (req, res, next) => {
  logger.warn("Recurso inexistente");
  next();
};

app.get("/", (req, res) => {
  logger.info("Success!");
  res.end();
});

app.get("/sumar", (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    loggerFile.error("Ingrese un número");
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
