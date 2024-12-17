import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const oswald = Oswald({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
