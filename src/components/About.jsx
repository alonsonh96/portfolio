// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'

const About = () => {
  return (
    <Section id='sobre mí'>
      <motion.div
        initial={{ opacity: 0, y: 30}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className='max-w-4xl'
      >
        <h2 className='text-sm uppercase tracking-widest text-gray-400 mb-6'>
          Sobre mí
        </h2>

        <p className='text-lg text-white mb-6 leading-relaxed'>
          Hola, soy Alonso, Ingeniero de Sistemas y desarrollador web con
          enfoque en Frontend y Backend. Me apasiona construir aplicaciones
          modernas, escalables y bien estructuradas, combinando buenas prácticas
          de desarrollo con una experiencia de usuario cuidada. Mi trabajo
          conecta tecnologías web actuales con arquitecturas eficientes, desde
          el desarrollo de interfaces responsivas y dinámicas hasta la
          implementación de lógica backend robusta y APIs bien diseñadas.
          Disfruto transformar ideas en soluciones digitales funcionales y
          mantenibles.
        </p>

        <p className='text-lg text-gray-400 leading-relaxed'>
          Más allá del código, mantengo una curiosidad constante por nuevas
          tecnologías, patrones de diseño y mejoras en rendimiento. En un
          entorno tecnológico que evoluciona rápidamente, creo firmemente que
          aprender de forma continua no es una opción, sino una necesidad. Si te
          interesa crear productos digitales sólidos y bien pensados, estaremos
          hablando el mismo idioma
        </p>
      </motion.div>
    </Section>
  )
}

export default About
