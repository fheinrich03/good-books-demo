import { useQuery } from "@tanstack/react-query";
import type { Book } from "~/types/book";
import { mapBookDTOToBookRow } from "~/utils/book";

export interface BookListResponse {
  kind: string;
  totalItems: number;
  items: Book[];
}

export async function fetchBookList() {
  const url = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result: BookListResponse = await response.json();
    return result;
  } catch (error: any) {
    console.error(error.message);
  }
}

export function useGetBookList() {
  const response = useQuery({
    queryKey: ["book-list"],
    queryFn: fetchBookList,
  });
  const books = mapBookDTOToBookRow(response?.data);

  return {
    isLoading: response.isLoading,
    isError: response.isError,
    books,
  };
}
