import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gerardeklu.dev'),
  title: 'Gerard Eklu — Full-Stack & DevOps Engineer',
  description:
    'Self-taught engineer with 5+ years delivering scalable apps and cloud infrastructure. React, Node.js, Terraform, Docker, CI/CD on GCP/AWS.',
  openGraph: {
    title: 'Gerard Eklu — Full-Stack & DevOps Engineer',
    description:
      'Frontend excellence + cloud reliability. Projects across GCP/AWS, Terraform, Docker, CI/CD.',
    url: '/',
    siteName: 'Gerard Eklu',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  icons: { icon: '/favicon.ico' },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
