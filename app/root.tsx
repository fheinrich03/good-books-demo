import { Outlet } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Toaster } from "sonner";

import "./app.css";

export { Layout } from "./layout";
export { ErrorBoundary } from "./error";

ModuleRegistry.registerModules([AllCommunityModule]);
const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Outlet />
      </QueryClientProvider>
    </>
  );
}
