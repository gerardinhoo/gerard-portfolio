import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Gerard Eklu - Cloud & DevOps Engineer",
  description: "Engineering reliable, automated cloud systems across AWS & GCP with a DevOps-driven approach.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-32x32.png?v=3" }
    ],
    apple: "/apple-touch-icon.png?v=3",
    shortcut: "/favicon.ico?v=3",
  },
  manifest: "/site.webmanifest?v=3",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='preconnect' href='https://cdn.jsdelivr.net' crossOrigin='' />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
