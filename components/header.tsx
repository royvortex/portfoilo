"use client"

import Link from "next/link"
import { useState } from "react"
import siteMetadata from "@/lib/site-metadata"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-foreground hover:text-muted-foreground transition-colors">
          {siteMetadata.initials}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/developer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Developer
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/#about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/developer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Developer
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
