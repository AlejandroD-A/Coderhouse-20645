const path = require("path");
const dotenv = require("dotenv");
process.env.MODO = "byn";

dotenv.config({
  path:
    process.env.MODO == "byn"
      ? path.resolve(__dirname, "colores.env")
      : path.resolve(__dirname, "byn.env"),
});
const parseArgs = require("minimist");

const fondo = process.env.FONDO;
const frente = process.env.FRENTE;
const modo = process.env.MODO;

console.log({
  fondo,
  frente,
  modo,
});
