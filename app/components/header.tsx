"use client";

import UserAvatar from "./user-avatar";
import Logo from "./logo";

export default function Header() {
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
        {<UserAvatar />}
      </div>
    </div>
  );
}
