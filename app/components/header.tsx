"use client";

import { getUserFromClient } from "~/service/auth-service";
import UserAvatar from "./user-avatar";
import { useEffect, useState } from "react";
import type { AuthUser } from "~/types/auth-user";
import Logo from "./logo";

export default function Header() {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const clientUser = getUserFromClient();
    setUser(clientUser);
  }, []);

  return (
    <div
      id="header"
      className="bg-secondary grid h-16 w-full grid-cols-3 px-8 py-2"
    >
      <div id="left " className="content-center">
        <Logo />
      </div>
      <div id="center" className="content-center"></div>
      <div
        id="right"
        className="flex content-center items-center justify-end gap-4"
      >
        {user && <UserAvatar />}
      </div>
    </div>
  );
}
