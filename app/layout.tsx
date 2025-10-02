import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "SBF Bismit 2025",
  description: "Created for Sekolah Bem Fasilkom Biro Bisnis dan Kemitraan 2025",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={<div>Loading...</div>}>
          <header>
            <SiteHeader />
          </header>
          <main className="min-h-[60svh]">{children}</main>
          <footer>
            <SiteFooter />
          </footer>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
