import { columns, type BookRow } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useGetBookList } from "@/hooks/useGetBookList";
import type { Row } from "@tanstack/react-table";
import { useNavigate } from "react-router";
import { NAV_ROUTES } from "~/config/nav-routes";

export default function BookList() {
  const { books, isLoading } = useGetBookList();
  const navigate = useNavigate();

  if (isLoading) return <>Loading</>;
  if (!books) return;

  function onRowClick(b: BookRow) {
    navigate(NAV_ROUTES.BOOK_DETAIL(b.id));
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={books} onRowClick={onRowClick} />
    </div>
  );
}
