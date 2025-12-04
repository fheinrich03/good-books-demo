import type { Book } from "~/types/book";
import { Separator } from "./ui/separator";

interface BookDetailProps {
  book: Book;
}

export default function BookDetail({ book }: BookDetailProps) {
  const bookInfo = book?.volumeInfo;
  if (!bookInfo) return null;

  const languageNames = new Intl.DisplayNames(["en"], { type: "language" });
  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-medium">{bookInfo.title}</h2>
      <p className="mt-4 text-xl font-medium">by {bookInfo.authors}</p>
      {bookInfo.averageRating && (
        <p className="text-lg mt-4">Rating: {bookInfo.averageRating}</p>
      )}
      <Separator className="my-4" />
      <div className="flex space-x-4">
        <p>Genres: </p>
        <ul className="flex h-5 space-x-4">
          {bookInfo.categories.map((category, index) => {
            return (
              <li
                key={"category-" + index.toString()}
                className="flex h-5 space-x-4"
              >
                <div>{category}</div>
                <Separator orientation="vertical" />
              </li>
            );
          })}
        </ul>
      </div>
      <p className="py-8 text-xl font-light">{bookInfo.description}</p>

      <div className="grid w-max grid-cols-2">
        <div className="mr-8">
          <p>language:</p>
          <p>publishedDate:</p>
          <p>publisher:</p>
          <p>pageCount:</p>
        </div>
        <div>
          <p>{languageNames.of(bookInfo.language)}</p>
          <p>{bookInfo.publishedDate}</p>
          <p>{bookInfo.publisher}</p>
          <p>{bookInfo.pageCount}</p>
        </div>
      </div>
    </div>
  );
}
