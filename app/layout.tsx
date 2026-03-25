import type { Metadata } from 'next';
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'Nolan Robert Idle | Developer & Builder',
  description: 'Personal resume website for Nolan Robert Idle, a 15-year-old high school programmer, track & cross country athlete, and honor roll student.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans bg-[#F5F2ED] text-[#1A1A1A] antialiased selection:bg-[#FF4E00] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
