import { useQuery } from "@tanstack/react-query";
import type { BookResponse } from "~/types/book";
import { mapBookDTOToBookRow } from "~/utils/books";

export async function fetchBookList() {
  const url = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result: BookResponse = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

export function useGetBookList() {
  const response = useQuery({
    queryKey: ["book-list"],
    queryFn: fetchBookList,
  });
  if (!response?.data) return null;
  const books = mapBookDTOToBookRow(response?.data);
  return books;
}
