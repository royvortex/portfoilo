"use client"

import { motion } from "framer-motion"

interface ExperienceItem {
  company: string
  title: string
  period: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    company: "Hypercraft",
    title: "Developer",
    period: "Present",
    description:
      "Spearheading development of core game modes and network infrastructure. creating custom plugins to enhance player experience.",
  },
  {
    company: "BharatMC",
    title: "Senior Developer",
    period: "Past",
    description:
      "Managed server systems and implemented custom gameplay features.",
  },
  {
    company: "PerishSMP",
    title: "Lead Developer",
    period: "Present",
    description:
      "Developed custom SMP mechanics.",
  },
  {
    company: "CashMC",
    title: "Developer",
    period: "Past",
    description:
      "Contributed to optimization of server performance and smooth systems.",
  },
  {
    company: "CloakMC",
    title: "Developer",
    period: "Past",
    description:
      "Assisted with plugin configuration, bug fixes, and feature implementation.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 border-t border-border">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A timeline of my professional journey and the roles I've held.
        </p>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ x: 8 }}
              className="group card-elevated border border-border/50 rounded-lg p-6 hover:border-foreground/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-foreground/40 to-transparent rounded-l-lg" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-foreground transition-colors">
                  {exp.title}
                </h3>
                <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
              </div>
              <p className="text-sm font-semibold text-muted-foreground/80 mb-3">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
