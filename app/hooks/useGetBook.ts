import { useQuery } from "@tanstack/react-query";
import type { Book } from "~/types/book";

export async function fetchBookDetails(id: string) {
  const url = "https://www.googleapis.com/books/v1/volumes/" + id;
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result: Book = await response.json();
    return result;
  } catch (error: any) {
    console.error(error.message);
  }
}

export function useGetBookDetails(id: string) {
  const response = useQuery({
    queryKey: ["book-list"],
    queryFn: () => fetchBookDetails(id),
  });

  return {
    isLoading: response.isLoading,
    isError: response.isError,
    book: response.data,
  };
}
