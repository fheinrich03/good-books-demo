import type { AuthUser } from "~/types/auth-user";

export function getUserFromClient(): AuthUser | null {
  const user = localStorage.getItem("user");
  if (!user) return null;

  return JSON.parse(user);
}
