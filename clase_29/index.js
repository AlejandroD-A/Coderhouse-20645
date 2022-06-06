const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`I am a master ${process.pid}`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("listening", (worker, address) => {
    console.log(`${worker.process.pid} es listening in port ${address.port}`);
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hola mundo");
    })
    .listen(8000);
  console.log(`Worker ${process.pid} started`);
}
