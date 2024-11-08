import type { Metadata } from "next";
import { Open_Sans, Racing_Sans_One } from "next/font/google";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const rso = Racing_Sans_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rso",
});

const ops = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ops",
});

export const metadata: Metadata = {
  title: "Billetterie 2024",
  description: "Une billetterie en ligne pour un projet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${rso.variable} ${ops.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
