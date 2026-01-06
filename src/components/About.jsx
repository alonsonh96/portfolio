// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'

const About = () => {
  return (
    <Section id='sobre mí'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-16 items-center'
      >
        <div className='flex-1 text-center '>
          <h2 className='text-lg uppercase tracking-widest text-gray-400 mb-6'>
            Sobre mí
          </h2>

          <p className='text-lg text-white mb-6 leading-relaxed text-justify'>
            Hola, soy Alonso, Ingeniero de Sistemas y desarrollador web con
            enfoque en Frontend y Backend. Me especializo en crear aplicaciones
            modernas, escalables y bien estructuradas, combinando buenas
            prácticas de desarrollo con una experiencia de usuario cuidada.
            Disfruto transformar ideas en soluciones digitales funcionales y
            mantenibles.
          </p>

          <p className='text-lg text-gray-300 leading-relaxed text-justify'>
            Más allá del código, mantengo una curiosidad constante por nuevas
            tecnologías, patrones de diseño y optimización de rendimiento. Creo
            firmemente que el aprendizaje continuo es clave para construir
            productos digitales sólidos y bien pensados.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex-1 relative flex justify-center md:display-block'
        >
          <div className='absolute inset-0 bg-purple-500/15 blur-3xl rounded-full animate-pulse' />
          <img
            src={'/src/assets/about.webp'}
            alt='Foto de Alonso'
            // className='relative z-10 rounded-full shadow-2xl p-10'
            className='relative z-10 w-56 sm:w-64 md:w-72 lg:w-80 aspect-square object-cover rounded-full shadow-2xl'
          />
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default About
