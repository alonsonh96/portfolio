// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'

const Contact = () => {
  return (
    <Section id="contacto">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Contáctame
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Trabajemos juntos en tu próximo proyecto
          </p>
          
          <motion.a
            href="mailto:alex@example.com"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Envíame un correo electrónico
          </motion.a>
          
          <div className="mt-16 flex justify-center gap-8">
            {['GitHub', 'LinkedIn', 'Twitter'].map((platform, index) => (
              <motion.a
                key={platform}
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Contact
