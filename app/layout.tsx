import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full stack developer portfolio",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body className={`font-sans antialiased bg-background text-foreground relative z-0`}>
        <div className="pattern-square" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
