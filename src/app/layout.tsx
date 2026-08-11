import SmoothScrollProvider from '@/src/components/animation/smooth-scroll';
import Footer from '@/src/components/shared/layout/footer/footer';
import Navbar from '@/src/components/shared/layout/navbar/navbar';
import { fontVariables } from '@/src/utils/font';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        <Suspense>
          <SmoothScrollProvider>
            <Navbar />
            <main className="bg-background-6">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
