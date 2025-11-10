"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 border-t border-border">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">About</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a full-stack developer passionate about building accessible, performant web experiences. With a
                focus on clean code and thoughtful design, I craft solutions that balance aesthetics with functionality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I work with modern web technologies including React, TypeScript, and Next.js to create
                applications that users love to interact with. I believe in continuous learning and staying updated with
                the latest industry trends.
              </p>
            </div>
          </div>

          <motion.div
            className="card-elevated border border-border/50 rounded-lg p-6 h-fit"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bold text-foreground mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-foreground font-bold mt-1">→</span>
                <span>5+ years of development experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground font-bold mt-1">→</span>
                <span>Specialized in React and Next.js</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground font-bold mt-1">→</span>
                <span>Passionate about UX and performance</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <Link
          href="/resume.pdf"
          className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground font-semibold transition-colors mt-8 border-2 border-foreground px-6 py-3 rounded-lg hover:bg-foreground/5 hover:shadow-lg"
        >
          Download CV
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}
