export const routes = [];

export function get(path, handler) {
  routes.push({
    method: "GET",
    path,
    handler,
  });
}

// get("/", () => {
//   console.log("home");
// });
// get("/about", () => {
//   console.log("About Page");
// });

// console.log(routes);

// const route = routes.find((route) => {
//   return route.path === "/about";
// });

// route.handler();
