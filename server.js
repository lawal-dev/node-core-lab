import http from "http";
const server = http.createServer((req, res) => {
  res.end("I'm a backend engineer");
});

server.listen(4000, () => {
  console.log("Listening on port 4000");
});
