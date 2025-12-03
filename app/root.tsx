import { Outlet } from "react-router";

import "./app.css";

export { Layout } from "./layout";
export { ErrorBoundary } from "./error";

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
