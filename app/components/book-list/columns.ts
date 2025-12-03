import { type ColumnDef } from "@tanstack/react-table"

export interface BookRow {
  id: string;
  title: string;
  author: string;
  genre: string;
  averageRating?: number;
}

export const columns: ColumnDef<BookRow>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "averageRating",
    header: "Average Rating",
  },
]