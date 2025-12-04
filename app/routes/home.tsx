import { redirect } from "react-router";
import { NAV_ROUTES } from "~/config/nav-routes";


export async function loader() {
  return redirect(NAV_ROUTES.BOOK_LIST);
}

export default function Home() {
  return null;
}