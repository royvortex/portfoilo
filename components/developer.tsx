"use client"

import { motion } from "framer-motion"
import siteMetadata from "@/lib/site-metadata"

export default function Developer() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Profile Image & Basic Info */}
          <div className="md:col-span-1">
            <div className="w-32 h-32 bg-muted rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">{siteMetadata.name}</h1>
            <p className="text-muted-foreground mb-6">Full Stack Developer</p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase mb-1">Status</h3>
                <p className="text-muted-foreground">Available for freelance & full-time roles</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase mb-1">Location</h3>
                <p className="text-muted-foreground">Remote</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              {siteMetadata.social.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Developer Info */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a focus on building accessible, performant, and user-friendly
                applications. I believe in clean code, thoughtful design, and continuous learning.
              </p>
            </section>



            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Tech Stack</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Frontend</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Backend</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>Firebase</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
