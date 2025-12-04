import { useParams } from "react-router";
import BookCard from "~/components/book-card";
import BookDetail from "~/components/book-detail";
import { useGetBookDetails } from "~/hooks/useGetBook";

type BookParams = {
  id: string;
};

export default function BookDetailPage() {
  const params = useParams<BookParams>();
  const { book, isLoading } = useGetBookDetails(params.id!);

  if (isLoading) return <>Loading</>;
  if (!book) return <>Book Not found</>;
  console.log(book);
  
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid gap-8">
        <h1 className="text-center text-2xl font-semibold">Book Details</h1>
        <div className="grid grid-cols-2 gap-8">
          <BookCard imageUrl={book.volumeInfo?.imageLinks.thumbnail} />
          <BookDetail book={book} />
        </div>
      </div>
    </div>
  );
}
