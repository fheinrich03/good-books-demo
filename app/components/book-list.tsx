import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { themeBalham, type ColDef } from "ag-grid-community";
import { useGetBookList } from "~/hooks/useGetBookList";

export interface BookRow {
  title: string;
  author: string;
  genre: string;
  averageRating?: number;
}

export default function BookList() {
  const myTheme = themeBalham.withParams({ accentColor: "red" });
  const books = useGetBookList();
  console.log(books);
  const [colDefs, setColDefs] = useState<ColDef<BookRow>[]>([
    { field: "title" },
    { field: "author" },
    { field: "genre" },
    { field: "averageRating" },
  ]);

  return (
    <div className="ag-theme-quartz min-h-80 min-w-3xl w-max">
      <AgGridReact theme={myTheme} rowData={books} columnDefs={colDefs} />
    </div>
  );
}
