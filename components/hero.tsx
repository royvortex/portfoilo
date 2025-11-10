"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import siteMetadata from "@/lib/site-metadata"

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {siteMetadata.headline}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl text-balance leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {siteMetadata.tagline}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View My Work
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground/10 hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
