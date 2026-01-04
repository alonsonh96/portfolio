// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useMotionValue } from 'motion/react'
import { useEffect } from 'react'

const ProgressBar = () => {
  const scrollProgress = useMotionValue(0)
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.panel')
      const totalSections = sections.length

      if (totalSections === 0) return

      let currentSection = 0
      const viewportMiddle = window.innerHeight / 2

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        // Si el centro de la sección está por encima del centro del viewport
        if (rect.top < viewportMiddle) {
          currentSection = index
        }
      })

      // Calcular progreso: de 0 a 1
      const progress = currentSection / (totalSections - 1)
      scrollProgress.set(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollProgress])

  return (
    <motion.div
      className='fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 origin-left z-50'
      style={{ scaleX: smoothProgress }}
    />
  )
}

export default ProgressBar
