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

  function renderContent() {
    if (isLoading) return <>Loading</>;
    if (!book) return <>Book Not found</>;

    return (
      <div className="flex gap-10">
        <BookCard imageUrl={book.volumeInfo?.imageLinks.thumbnail} />
        <BookDetail book={book} />
      </div>
    );
  }

  return (
    <>
      <h1 className="my-10 text-center text-5xl font-semibold">Book Details</h1>
      <div
        id="content"
        className="flex h-full items-center justify-center py-16"
      >
        {renderContent()}
      </div>
    </>
  );
}
