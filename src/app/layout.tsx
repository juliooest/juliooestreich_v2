import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BinaryRain from '@/components/BinaryRain';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Júlio Oestreich",
  description: "made with next.js, ts and tailwind by Júlio Oestreich",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative min-h-screen bg-white ${geistSans.variable} ${geistMono.variable}`}>
        <BinaryRain />
        {children}
      </body>
    </html>
  );
}