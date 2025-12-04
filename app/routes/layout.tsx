import { Outlet } from "react-router";
import Header from "~/components/header";

export default function Layout() {
  
  return (
    <div id="main" className="min-h-screen justify-center">
      <Header />
      <Outlet />
    </div>
  );
}