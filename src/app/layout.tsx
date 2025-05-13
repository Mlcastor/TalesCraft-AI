import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tales Craft AI - AI-Powered Text Adventure Game",
  description:
    "Forge your destiny in an AI-powered text adventure game where your choices shape the story",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navigation />
          <Footer />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
