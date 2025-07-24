import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer Portfolio",
  description:
    "Portfolio website showcasing modern web development projects and skills. Specialized in React, Next.js, and full-stack development.",
  keywords: [
    "portfolio",
    "web developer",
    "full stack",
    "react",
    "next.js",
    "javascript",
    "typescript",
  ],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://johndoe-portfolio.vercel.app",
    title: "John Doe - Full Stack Developer Portfolio",
    description:
      "Portfolio website showcasing modern web development projects and skills.",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer Portfolio",
    description:
      "Portfolio website showcasing modern web development projects and skills.",
    creator: "@johndoe",
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
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
