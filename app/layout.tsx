import type { Metadata } from 'next';
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import NoiseOverlay from '@/components/noise-overlay';
import CustomCursor from '@/components/custom-cursor';
import Terminal from '@/components/terminal';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nolan Idle | Developer & Problem Solver',
  description: 'Personal resume website for Nolan Idle, a 15-year-old high school developer, systems programmer, and problem solver.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans bg-paper text-ink antialiased selection:bg-accent selection:text-white" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NoiseOverlay />
          <CustomCursor />
          <Terminal />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
