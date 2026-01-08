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
                I'm a full-stack developer with a deep passion for the Minecraft ecosystem. I specialize in building
                custom plugins, configuring huge networks, and creating web applications that bridge the gap between
                game servers and the web.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience across top servers like Hypercraft and BharatMC, I bring a unique blend of game design
                intuition and technical expertise to every project. I thrive on creating immersive experiences for players
                and robust tools for administrators.
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


      </motion.div>
    </section>
  )
}
