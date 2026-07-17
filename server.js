import http from "http";
import { get, routes } from "./router.js";

get("/", (req, res) => {
  res.end("Home Page");
});

get("/about", (req, res) => {
  res.end("About Page");
});

get("/contact", (req, res) => {
  res.end("Contact Page");
});
const server = http.createServer((req, res) => {
  const route = routes.find((route) => {
    return route.method === req.method && route.path === req.url;
  });

  if (route) {
    route.handler(req, res);
  } else {
    res.statusCode = 404;

    res.end("404 Page Not Found");
  }
  //   if (req.url === "/") {
  //     res.end("Welcome to homempage");
  //   } else if (req.url === "/about") {
  //     res.end("welcome to the about page");
  //   } else {
  //     res.statusCode = 404;
  //     res.end("Page not found");
  //   }
});

server.listen(4000, () => {
  console.log("Listening on port 4000");
});
