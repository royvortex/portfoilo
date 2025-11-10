"use client"

import { motion } from "framer-motion"

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML5/CCS3"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "MYSQL", "NOSQL", "PostgreSQL", "MongoDB", "DSA", "DENZINS", "JAVA"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "GitHub", "Vercel", "AWS"],
  },
]

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 border-t border-border">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Technologies and tools I work with to build modern, scalable applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="card-elevated border border-border/50 rounded-lg p-6 hover:border-foreground/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-5">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-muted/50 text-foreground rounded-full text-sm font-medium hover:bg-muted/80 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
