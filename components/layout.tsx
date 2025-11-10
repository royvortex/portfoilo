import type React from "react"
import type { Metadata } from "next"
import siteMetadata from "@/lib/site-metadata"

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export const generateMetadata = ({ title }: LayoutProps): Metadata => {
  const pageTitle = title ? `${title} | ${siteMetadata.name}` : siteMetadata.name
  return {
    title: pageTitle,
    description: siteMetadata.description,
    keywords: ["developer", "portfolio", "react", "typescript", "next.js"],
    openGraph: {
      title: pageTitle,
      description: siteMetadata.description,
      type: "website",
    },
  }
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>
}
