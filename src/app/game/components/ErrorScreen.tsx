import Link from "next/link";

interface ErrorScreenProps {
  message: string;
}

/**
 * Component that displays an error message with a return link
 */
export function ErrorScreen({ message }: ErrorScreenProps) {
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <div className="bg-red-900 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          An Error Occurred
        </h2>
        <p className="text-gray-300">{message}</p>
      </div>
      <Link
        href="/characters"
        className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-bold"
      >
        Return to Characters
      </Link>
    </div>
  );
}
