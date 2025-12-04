import { Outlet } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import "./app.css";

export { Layout } from "./layout";
export { ErrorBoundary } from "./error";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center"/>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}
