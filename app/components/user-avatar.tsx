import { CircleUser, LogOutIcon } from "lucide-react";
import type { AuthUser } from "~/types/auth-user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { logoutUser } from "~/service/auth-service";
import { useNavigate, useRevalidator, useRouteLoaderData } from "react-router";
import { NAV_ROUTES } from "~/config/nav-routes";

export default function UserAvatar() {
  const navigate = useNavigate();
  const revalidator = useRevalidator();
  const user = useRouteLoaderData("protected-layout") as AuthUser;

  const userInitials = user?.username
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  function handleLogout() {
    logoutUser();
    revalidator.revalidate();
    navigate(NAV_ROUTES.LOGIN);
  }

  return (
    <div id="right">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex content-center items-center gap-2">
          <CircleUser />
          <p className="text-center text-2xl font-medium">{userInitials}</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={handleLogout}>
            <LogOutIcon />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
