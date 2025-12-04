import { columns, type BookRow } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useNavigate } from "react-router";
import { NAV_ROUTES } from "~/config/nav-routes";

interface BookListProps {
  books?: BookRow[];
}

export default function BookList({ books }: BookListProps) {
  const navigate = useNavigate();

  function onRowClick(b: BookRow) {
    navigate(NAV_ROUTES.BOOK_DETAIL(b.id));
  }
  
  if (!books) return null;

  return <DataTable columns={columns} data={books} onRowClick={onRowClick} />;
}
