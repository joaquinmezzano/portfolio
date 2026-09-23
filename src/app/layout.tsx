import type { Metadata } from 'next';

import {
  Archivo as FontArchivo,
  Instrument_Sans as FontInstrumentSans,
  JetBrains_Mono as FontJetBrainsMono,
} from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import Footer from '@/common/components/shared/footer';
import Header from '@/common/components/shared/header';
import { cn } from '@/common/lib/utils';
import ActiveSectionContextProvider from '@/common/stores/active-section';
import { ThemeProvider } from '@/common/theme/theme-provider';

import '@/common/styles/globals.css';

export const metadata: Metadata = {
  title: 'Joaquin Mezzano — Backend Developer',
  description:
    'Backend-focused developer (Java, SQL, Python) and recent Computer Science Analyst from UNRC. AI-integrated full-stack projects: RAG, LLMs, computer vision.',
};

const fontArchivo = FontArchivo({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const fontInstrumentSans = FontInstrumentSans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const fontJetBrainsMono = FontJetBrainsMono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        fontArchivo.variable,
        fontInstrumentSans.variable,
        fontJetBrainsMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="scroll-smooth">
        <ActiveSectionContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
          </ThemeProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
