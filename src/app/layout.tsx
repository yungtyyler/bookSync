import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BookSync',
  description: 'Track your reading journey together.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-parchment text-soft-black min-h-screen`}>
        <Header />
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
