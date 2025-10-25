import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientTransition from "@/components/ClientTransition";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gemi Yudhia - Frontend Developer Portfolio",
  description:
    "Portfolio website showcasing modern web development projects and skills.",
  icons: {
    icon: "/images/logo.png",
  },
  keywords: [
    "portfolio",
    "web developer",
    "react",
    "next.js",
    "javascript",
    "typescript",
  ],
  authors: [{ name: "Gemi Yudhia" }],
  creator: "Gemi Yudhia",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gemiyudhiaa.vercel.app",
    title: "Gemi Yudhia - Frontend Developer Portfolio",
    description:
      "Portfolio website showcasing modern web development projects and skills.",
    siteName: "Gemi Yudhia Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemi Yudhia - Frontend Developer Portfolio",
    description:
      "Portfolio website showcasing modern web development projects and skills.",
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
    <html lang="en" className="scroll-smooth bg-[#F6F6EF] ">
      <body className={inter.className}>
        <ClientTransition>{children}</ClientTransition>
      </body>
    </html>
  );
}
