import { BookOpenText } from "lucide-react";
import { redirect, useNavigate } from "react-router";
import { NAV_ROUTES } from "~/config/nav-routes";

export default function Logo() {
  const navigate = useNavigate();
  function handleClick() {
    return navigate(NAV_ROUTES.HOME);
  }
  return (
    <div
      className="flex w-max gap-2 hover:cursor-pointer"
      onClick={handleClick}
    >
      <BookOpenText size={42} />
      <p className="content-center text-center text-2xl font-medium">
        Good Books Demo
      </p>
    </div>
  );
}
