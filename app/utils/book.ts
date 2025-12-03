import type { BookRow } from "~/components/book-list/columns";
import type { BookListResponse } from "~/hooks/useGetBookList";
import type { Book } from "~/types/book";

export function mapBookDTOToBookRow(booksDto?: BookListResponse) {
  const books = booksDto?.items?.map((book: Book) => {
    const bookInfo = book.volumeInfo;
    const bookRow: BookRow = {
      id: book.id,
      title: bookInfo.title,
      author: bookInfo.authors.join(),
      genre: bookInfo.categories.join(),
      averageRating: bookInfo.averageRating,
    };
    return bookRow;
  });
  return books;
}
