import BookList from "@/components/book-list/book-list";
import type { Route } from "../../../+types/root";
import { useGetBookList } from "~/hooks/useGetBookList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HomePage" },
    { name: "description", content: "Welcome to Good Reeds" },
  ];
}

export default function BookListPage() {
  const { books, isLoading } = useGetBookList();

  function renderContent() {
    if (isLoading) return <>Loading</>;
    if (!books) return;

    return <BookList books={books} />;
  }

  return (
    <>
      <h1 className="my-10 text-center text-5xl font-semibold">Book List</h1>
      <div
        id="content"
        className="flex h-full items-center justify-center py-16"
      >
        {renderContent()}
      </div>
    </>
  );
}
