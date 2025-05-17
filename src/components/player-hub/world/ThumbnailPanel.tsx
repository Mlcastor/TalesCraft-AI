import Image from "next/image";
import { Card } from "@/components/ui/Primitives";

interface ThumbnailPanelProps {
  thumbnailUrl: string | null;
  altText: string;
}

/**
 * Thumbnail Panel Component
 *
 * Displays the world's thumbnail image in a card
 */
export function ThumbnailPanel({ thumbnailUrl, altText }: ThumbnailPanelProps) {
  if (!thumbnailUrl) {
    return (
      <Card className="bg-gray-900 h-64 flex items-center justify-center">
        <p className="text-gray-500 italic">No image available</p>
      </Card>
    );
  }

  return (
    <Card className="bg-gray-900 overflow-hidden h-64 p-0">
      <div className="h-full w-full relative">
        <Image
          src={thumbnailUrl}
          alt={altText}
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}
