import { useParams } from "react-router";

type BookParams = {
  id: string;
};

export default function BookDetailPage() {
  const params = useParams<BookParams>();

  return <>{params.id}</>;
}
