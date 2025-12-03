import BookList from "~/components/book-list";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HomePage" },
    { name: "description", content: "Welcome to Good Reeds" },
  ];
}

export default function BookListPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid gap-8">
        <h1 className="text-center text-2xl font-semibold">Book List</h1>
        <BookList />
      </div>
    </div>
  );
}
