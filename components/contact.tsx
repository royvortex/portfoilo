"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import siteMetadata from "@/lib/site-metadata"

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-5 h-5" />,
  LinkedIn: <Linkedin className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
}

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 border-t border-border">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Let's Connect</h2>
          <p className="text-muted-foreground mb-12 max-w-md">Feel free to reach out via social platforms</p>

          {/* Social Links with Icons */}
          <div className="flex gap-6">
            {siteMetadata.social.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-border rounded-lg hover:bg-muted hover:border-foreground transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={link.name}
              >
                {iconMap[link.name] || <span className="text-sm font-semibold">{link.icon}</span>}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
