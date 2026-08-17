import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientTransition from "@/components/ClientTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gemi Yudhia",
  description:
    "Portfolio Gemi Yudhia.",
  keywords: [
    "portfolio",
    "frontend developer",
    "react",
    "next.js",
    "javascript",
    "typescript",
    "fullstack"
  ],
  authors: [{ name: "Gemi Yudhia" }],
  creator: "Gemi Yudhia",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gemiyudhiaa.vercel.app",
    title: "Gemi Yudhia — Frontend Developer",
    description:
      "Portfolio Gemi Yudhia, frontend developer yang fokus di Next.js, TypeScript, dan UI/UX.",
    siteName: "Gemi Yudhia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemi Yudhia — Frontend Developer",
    description:
      "Portfolio Gemi Yudhia, frontend developer yang fokus di Next.js, TypeScript, dan UI/UX.",
    creator: "@gemiyudhia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased">
        <ClientTransition>{children}</ClientTransition>
      </body>
    </html>
  );
}
