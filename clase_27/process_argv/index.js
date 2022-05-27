function param(p) {
  const index = process.argv.indexOf(p);
  return process.argv[index + 1];
}

const nombre = param("--nombre");
const apellido = param("--apellido");
console.log(`Mi nombre es ${nombre} ${apellido}`);
