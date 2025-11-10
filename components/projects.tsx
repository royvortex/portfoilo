"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface Project {
  title: string
  description: string
  tags: string[]
  repo: string
  demo: string
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with product catalog, cart management, and Stripe payments.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    repo: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    repo: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Design System",
    description: "Comprehensive component library and design system for scalable applications.",
    tags: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    repo: "https://github.com",
    demo: "https://example.com",
  },
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-card/40 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

    <div className="card-elevated border border-border rounded-xl p-8 hover:border-foreground/50 transition-all duration-300 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-foreground/20 via-foreground/5 to-transparent rounded-t-xl" />

      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <motion.span
            key={tag}
            className="text-xs px-3 py-1.5 bg-muted/60 text-foreground rounded-full font-medium hover:bg-muted transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
      <div className="flex gap-6 pt-4 border-t border-border/50">
        <Link
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
        >
          Repository →
        </Link>
        <Link
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
        >
          Live Demo →
        </Link>
      </div>
    </div>
  </motion.div>
)

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 border-t border-border">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here are some of my recent projects showcasing my skills in full-stack development and design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
