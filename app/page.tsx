import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Experiments from './components/Experiments'

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experiments />
      <Experience />
      <Contact />
    </main>
  )
}
