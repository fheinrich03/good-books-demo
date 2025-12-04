import { Navigate, Outlet, useRouteLoaderData } from "react-router";
import { NAV_ROUTES } from "~/config/nav-routes";
import { type AuthUser } from "~/types/auth-user";
import { getUserFromClient } from "~/service/auth-service";

export async function clientLoader() {
  const user = getUserFromClient();
  return user;
}

export default function ProtectedLayout() {
  const user = useRouteLoaderData("protected-layout") as AuthUser;

  if (!user) {
    return <Navigate to={NAV_ROUTES.LOGIN} replace />;
  }
  return (
    <div id="main" className="min-h-screen justify-center">
      <Outlet />
    </div>
  );
}
