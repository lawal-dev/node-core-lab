import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to homempage");
  } else if (req.url === "/about") {
    res.end("welcome to the about page");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(4000, () => {
  console.log("Listening on port 4000");
});
