import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./routes/main-layout.tsx", [
    route("login", "./routes/login-page.tsx"),

    //protected routes
    layout(
      "./routes/(protected)/protected-layout.tsx",
      { id: "protected-layout" },
      [
        index("./routes/home-page.tsx"),
        route("books", "./routes/(protected)/books/book-list-page.tsx"),
        route("books/:id", "./routes/(protected)/books/book-detail-page.tsx"),
      ],
    ),
  ]),
] satisfies RouteConfig;
