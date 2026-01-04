// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'

const Hero = () => {

  return (
    <Section id='hero'>
      <motion.div
        className='max-w-5xl mx-auto text-center relative z-10'
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <motion.span
          className='text-sm tracking-[0.3em] text-gray-400 uppercase block mb-8'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Web Developer
        </motion.span>

        <motion.h1
          className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 text-white'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Alonso Nicho
        </motion.h1>

        <motion.p
          className='text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Desarrollador web con más de 3 años de experiencia en la creación de soluciones web de alto rendimiento, escalables y responsivas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='mt-12'
        >
          <motion.a
            href='#contacto'
            className='inline-block px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all backdrop-blur-sm'
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            Contáctame
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
      >
        <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1 h-3 bg-white/50 rounded-full mt-2'
          />
        </div>
      </motion.div>
    </Section>
  )
}

export default Hero
