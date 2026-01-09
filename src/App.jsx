import { useEffect } from 'react'
import gsap from 'gsap'
import { Observer } from "gsap/observer";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import ProgressBar from './components/ProgressBar'
import Projects from './components/Projects'

gsap.registerPlugin(Observer, ScrollToPlugin)

function App () {

    useEffect(() => {
    const sections = gsap.utils.toArray('.panel')
    let currentIndex = 0
    let isAnimating = false

    function goToSection(index) {
      if (index < 0 || index >= sections.length || isAnimating) return

      isAnimating = true
      currentIndex = index

      gsap.to(window, {
        scrollTo: { y: sections[index], autoKill: false },
        duration: 1,
        ease: 'power3.inOut',
        onComplete: () => {
          isAnimating = false
        }
      })
    }

    Observer.create({
      type: 'wheel,touch',
      wheelSpeed: 1,
      tolerance: 10,
      preventDefault: true,
      lockAxis: true,

      onDown: () => goToSection(currentIndex + 1),
      onUp: () => goToSection(currentIndex - 1)
    })

  }, [])
  
  return (
    <main className="bg-linear-to-br from-gray-950 via-gray-900 to-black overflow-hidden">
      <ProgressBar />
      <Navigation />

      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="py-12 px-6 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-gray-500 text-sm">
          <p>© 2026 Alex Rivera. All rights reserved.</p>
          <p>Design & built with ❤️</p>
        </div>
      </footer>
    </main>
  )
}

export default App
