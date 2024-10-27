import type { Metadata } from "next";
import localFont from "next/font/local";
import {Space_Grotesk} from "next/font/google"
import "./globals.css";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '64x64' },
      { url: '/icon-16.ico', sizes: '16x16' },
      { url: '/icon-48.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '192x192' },
      { url: '/icon-512.png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
  },
  title: "DMV Tax Pro",
  description: "Expert Tax Guidance, Every Step of the Way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
