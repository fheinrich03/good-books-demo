import { AspectRatio } from "./ui/aspect-ratio";

interface BookCardProps {
  imageUrl: string;
}

export default function BookCard({ imageUrl }: BookCardProps) {
  return (
    <div className="min-w-sm">
      <AspectRatio ratio={4 / 5} className="bg-muted rounded-lg">
        <img
          src={imageUrl}
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
    </div>
  );
}
