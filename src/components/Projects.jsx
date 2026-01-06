// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'

const Projects = () => {
  return (
    <Section id='proyectos'>
      <div className='max-w-7xl mx-auto w-full relative z-10 px-6'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center'>
          {/* Imagen - Aparece primero en mobile, segunda en desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className='relative order-1 md:order-2 w-full'
          >
            <img
              src='/src/assets/projects.webp'
              alt='Projects showcase'
              className='w-full h-auto object-contain drop-shadow-2xl'
            />
          </motion.div>

          {/* Texto - Aparece segundo en mobile, primero en desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='order-2 md:order-1'
          >
            <motion.h2
              className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              Mis proyectos
            </motion.h2>

            <div className='space-y-2 mb-5'>
              <motion.span
                className='block h-0.5 w-20 md:w-30 bg-blue-400'
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                style={{ originX: 0 }}
              />
              <motion.span
                className='block h-0.5 w-12 md:w-16 bg-blue-400/70'
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
                style={{ originX: 0 }}
              />
            </div>

            <motion.p
              className='text-base md:text-lg text-white mb-6 md:mb-8 leading-relaxed max-w-md'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Estos son algunos de mis proyectos que he realizado y en los que
              estoy trabajando actualmente.
            </motion.p>

            <motion.a
              href='#all-projects'
              className='inline-block px-6 md:px-8 py-3 md:py-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors text-sm md:text-base'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Más información
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Projects
