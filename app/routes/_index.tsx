import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HomePage" },
    { name: "description", content: "Welcome to Good Reeds" },
  ];
}

export default function HomePage() {
  return <>Home Page</>;
}
