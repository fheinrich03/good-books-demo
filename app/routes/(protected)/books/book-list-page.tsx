import BookList from "@/components/book-list/book-list";
import type { Route } from "../../../+types/root";
import { useGetBookList } from "~/hooks/useGetBookList";
import DynamicBreadcrumbs from "~/components/dynamic-breadcrumbs";
import { useEffect, useMemo, useState } from "react";
import { Input } from "~/components/ui/input";
import { debounce } from "@tanstack/pacer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HomePage" },
    { name: "description", content: "Welcome to Good Reeds" },
  ];
}

export default function BookListPage() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const debouncedSetQuery = useMemo(
    () =>
      debounce(
        (searchTerm: string) => {
          setQuery(searchTerm);
        },
        {
          wait: 300,
        },
      ),
    [],
  );

  useEffect(() => {
    debouncedSetQuery(search);
  }, [search, debouncedSetQuery]);

  const { books } = useGetBookList(query);

  function renderContent() {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-x-4">
          <Input
            className="max-w-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <BookList books={books} />
      </div>
    );
  }

  return (
    <div className="grid justify-center">
      <h1 className="my-10 text-center text-5xl font-semibold">Book List</h1>
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
