import { ReactNode } from "react";

interface HubLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  backLink?: {
    href: string;
    label: string;
  };
}

/**
 * Hub Layout Component
 *
 * Provides a consistent layout for all hub-related pages.
 */
export function HubLayout({
  children,
  title,
  description,
  backLink,
}: HubLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          {backLink && (
            <div className="flex items-center mb-4">
              <a
                href={backLink.href}
                className="mr-2 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </a>
              <h1 className="text-3xl font-bold text-amber-400">{title}</h1>
            </div>
          )}

          {!backLink && (
            <h1 className="text-3xl font-bold text-amber-400 mb-2">{title}</h1>
          )}

          {description && <p className="text-gray-300">{description}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}
