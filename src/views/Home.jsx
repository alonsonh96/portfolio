import { useEffect } from 'react'
import gsap from 'gsap'
import { Observer } from 'gsap/observer'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import ProgressBar from '../components/ProgressBar'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

gsap.registerPlugin(Observer, ScrollToPlugin)

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    const sections = gsap.utils.toArray('.panel')
    let currentIndex = 0
    let isAnimating = false

    // 🔥 leer hash al entrar
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      const indexFromHash = sections.findIndex(section => section.id === hash)

      if (indexFromHash !== -1) {
        currentIndex = indexFromHash

        // sin animación inicial
        gsap.set(window, {
          scrollTo: sections[currentIndex]
        })
      }
    }

    function goToSection (index) {
      if (index < 0 || index >= sections.length || isAnimating) return

      isAnimating = true
      currentIndex = index

      const section = sections[index]
      const id = section.getAttribute('id')

      if (id) {
        history.replaceState(null, '', `/#${id}`)
      }

      gsap.to(window, {
        scrollTo: { y: section, autoKill: false },
        duration: 1,
        ease: 'power3.inOut',
        onComplete: () => {
          isAnimating = false
        }
      })
    }

    const observer = Observer.create({
      type: 'wheel,touch',
      wheelSpeed: 1,
      tolerance: 10,
      preventDefault: true,
      lockAxis: true,

      onDown: () => goToSection(currentIndex + 1),
      onUp: () => goToSection(currentIndex - 1)
    })

    return () => observer.kill()
  }, [])

  return (
    <main className='bg-linear-to-br from-gray-950 via-gray-900 to-black overflow-hidden'>
      <ProgressBar />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default Home
