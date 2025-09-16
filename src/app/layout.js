import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PDFDownloader from "@/components/pdf";
import WhatsAppButton from "@/components/WhatApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TEXTILE BARRISOL STRETCH CEILING INDUSTRIES - Premium Ceiling Solutions",
  description: "Transform your space with premium stretch ceiling solutions. 3D, translucent, printed, and custom ceiling designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <PDFDownloader />
        <WhatsAppButton />
      </body>
    </html>
  );
}
