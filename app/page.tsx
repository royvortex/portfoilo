import Layout from "@/components/layout"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <Layout title="Portfolio">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  )
}
