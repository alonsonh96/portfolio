/* eslint-disable react-hooks/purity */
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'
import { useMemo } from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { ImMail4 } from 'react-icons/im'

const Hero = () => {
  // Pre-calcular valores aleatorios una sola vez
  const particles = useMemo(
    () =>
      [...Array(100)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2
      })),
    []
  )

  return (
    <Section
      id='hero'
      className='flex items-center justify-center px-6 relative overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900'
    >
      {/* Animated background orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 40, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className='absolute w-1 h-1 bg-white/20 rounded-full'
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className='max-w-5xl mx-auto text-center relative z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='inline-block mb-8'
        >
          <div className='px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full'>
            <span className='text-sm tracking-[0.3em] text-gray-300 uppercase'>
              Web Developer
            </span>
          </div>
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 relative'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className='relative inline-block'>
            <span className='bg-linear-to-r from-white via-gray-100 to-white bg-clip-text text-transparent'>
              Alonso Nicho
            </span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className='text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-12'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Desarrollador web con más de{' '}
          <span className='text-white font-semibold'>
            2 años de experiencia
          </span>{' '}
          en la creación de soluciones web de alto rendimiento, escalables y
          responsivas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href='#contacto'
            className='group px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 inline-flex items-center gap-2'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Hablemos</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a
            href='#proyectos'
            className='px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver proyectos
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className='flex justify-center gap-6 mt-12'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            {
              icon: <FaGithubSquare className='w-7 h-7' />,
              label: 'GitHub',
              href: 'https://github.com/alonsonh96'
            },
            {
              icon: <FaLinkedin className='w-7 h-7' />,
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/alonso-nh/'
            },
            {
              icon: <ImMail4 className='w-7 h-7' />,
              label: 'Email',
              href: 'mailto:nichohuaman16@gmail.com'
            }
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 flex items-center justify-center bg-slate-600 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 text-xl hover:scale-110 transition-all'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
              whileHover={{ y: -5 }}
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2'
      >
        <span className='text-xs text-gray-500 tracking-wider'>SCROLL</span>
        <div className='w-6 h-10 border-2 border-white/20 rounded-full flex justify-center relative overflow-hidden'>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className='w-1 h-3 bg-linear-to-r from-purple-400 to-pink-400 rounded-full mt-2'
          />
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className='absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-full'
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: 360
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.div
        className='absolute bottom-20 right-10 w-32 h-32 border border-white/10 rounded-full'
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
          rotate: -360
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </Section>
  )
}

export default Hero
