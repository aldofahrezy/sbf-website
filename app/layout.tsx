import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import Navbar from "@/components/elements/Navbar";

const jakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "SBF Bismit 2025",
  description:
    "Created for Sekolah Bem Fasilkom Biro Bisnis dan Kemitraan 2025",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head></head>
      <body
        className={`${jakartaSans.variable} max-w-[1920px] mx-auto relative border-x border-slate-950 font-jakarta bg-slate-100 text-b2 text-slate-900`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <main>{children}</main>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
