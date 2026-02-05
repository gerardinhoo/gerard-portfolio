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

const siteConfig = {
  title: 'Gerard Eklu - Cloud & DevOps Engineer',
  description:
    'Engineering reliable, automated cloud systems across AWS & GCP with a DevOps-driven approach.',
  url: 'https://gerardeklu.dev',
  image: '/og-image.png', // Add a 1200x630 image to /public
} as const;

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/ge-favicon.ico', sizes: 'any' },
      { url: '/ge-favicon-32x32.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/ge-favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Gerard Eklu',
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: 'Gerard Eklu - Cloud & DevOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://cdn.jsdelivr.net' crossOrigin='anonymous' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
