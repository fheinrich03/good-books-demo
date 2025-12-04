import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layout.tsx", [
    route("login", "./routes/login.tsx"),

    //protected routes
    layout("./routes/(protected)/layout.tsx", { id: "protected-layout" }, [
      index("./routes/home.tsx"),
      route("books", "./routes/(protected)/books/book-list.tsx"),
      route("books/:id", "./routes/(protected)/books/book-detail.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
