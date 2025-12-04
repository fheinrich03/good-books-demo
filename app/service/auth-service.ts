import { useRevalidator } from "react-router";
import type { AuthUser } from "~/types/auth-user";

export function getUserFromClient(): AuthUser | null {
  const user = localStorage.getItem("user");
  if (!user) return null;

  return JSON.parse(user);
}

export function loginUser(user: AuthUser) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem("user");
}
