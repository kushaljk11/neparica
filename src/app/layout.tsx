import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.neparica.com'),
  title: {
    default: 'Neparica – 1 Stop SMB IT Partner',
    template: '%s | Neparica'
  },
  description: 'Global IT company based in Chicago, USA providing full range of IT services, consulting, custom software, and 24/7 support for small and mid-sized businesses.',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png'
  },
  openGraph: {
    title: 'Neparica – 1 Stop SMB IT Partner',
    description: 'Chicago-based IT partner delivering enterprise-grade software and consulting at SMB rates since 2004.',
    url: 'https://www.neparica.com',
    siteName: 'Neparica Inc',
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body className="min-h-screen flex flex-col bg-white text-[#141820] antialiased">
        <SmoothScrollProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
