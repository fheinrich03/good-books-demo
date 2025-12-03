import type { BookRow } from "~/components/book-list";
import type { Book, BookResponse } from "~/types/book";

export function mapBookDTOToBookRow(booksDto: BookResponse) {
  const books = booksDto.items.map((book: Book) => {
    const bookInfo = book.volumeInfo;
    const bookRow: BookRow = {
      title: bookInfo.title,
      author: bookInfo.authors.join(),
      genre: bookInfo.categories.join(),
      averageRating: bookInfo.averageRating,
    };
    return bookRow;
  });
  return books;
}
