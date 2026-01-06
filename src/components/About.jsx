// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'

const About = () => {
  return (
    <Section id='sobre mí' className=''>
      <div className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-16 md:gap-8 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className='flex-1 md:text-left'
        >
          <h2 className='text-2xl md:text-5xl  font-bold tracking-widest text-white mb-2'>
            Sobre mí
          </h2>
          {/* Líneas decorativas */}
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
          <p className='text-sm md:text-lg text-white mb-6 leading-relaxed text-justify'>
            Hola, soy Alonso, Ingeniero de Sistemas y desarrollador web con
            enfoque en Frontend y Backend. Me especializo en crear aplicaciones
            modernas, escalables y bien estructuradas, combinando buenas
            prácticas de desarrollo con una experiencia de usuario cuidada.
            Disfruto transformar ideas en soluciones digitales funcionales y
            mantenibles.
          </p>
          <p className='text-sm md:text-lg text-gray-300 leading-relaxed text-justify'>
            Más allá del código, mantengo una curiosidad constante por nuevas
            tecnologías, patrones de diseño y optimización de rendimiento. Creo
            firmemente que el aprendizaje continuo es clave para construir
            productos digitales sólidos y bien pensados.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className='flex-1 relative flex justify-center md:display-block'
        >
          <div className='absolute inset-0 bg-purple-500/15 blur-3xl rounded-full animate-pulse' />
          <img
            src={'/src/assets/about.webp'}
            alt='Foto de Alonso'
            className='relative z-10 w-56 sm:w-64 md:w-72 lg:w-80 aspect-square object-cover rounded-full shadow-2xl'
          />
        </motion.div>
      </div>
    </Section>
  )
}

export default About
