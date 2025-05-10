import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Navigation from '@/components/Navigation';
import { UserSyncWrapper } from '@/components/UserSyncWrapper';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tales Craft AI - AI-Powered Text Adventure',
  description: 'Forge your destiny in an AI-powered text adventure where your choices shape the story',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          <UserSyncWrapper>
            {children}
          </UserSyncWrapper>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
