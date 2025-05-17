import { ReactNode } from "react";
import { PageHeader } from "@/components/ui/Primitives";

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
        <PageHeader
          title={title}
          description={description}
          backLink={backLink}
        />
        {children}
      </div>
    </div>
  );
}
