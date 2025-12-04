import BookList from "@/components/book-list/book-list";
import type { Route } from "../../../+types/root";
import { useGetBookList } from "~/hooks/useGetBookList";
import DynamicBreadcrumbs from "~/components/dynamic-breadcrumbs";

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

    return (
      <div>
        <BookList books={books} />
      </div>
    );
  }

  return (
    <div className="grid justify-center">
      <h1 className="my-10 text-center text-5xl font-semibold">Book Details</h1>
      <div
        id="content"
        className="h-full w-7xl items-center justify-center py-16"
      >
        <DynamicBreadcrumbs className="mb-8" />
        {renderContent()}
      </div>
    </div>
  );
}
