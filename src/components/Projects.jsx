// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'

const Projects = () => {

  return (
    <Section id="proyectos">

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Contenido izquierdo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            Mis proyectos
          </motion.h2>
          
          <div className="w-32 h-1 bg-white mb-8"></div>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Estos son algunos de mis proyectos que he realizado y en los que estoy trabajando actualmente.
          </motion.p>

          <motion.a
            href="#all-projects"
            className="inline-block px-8 py-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
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

        {/* Mockups derecha */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Mockup 1 */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 aspect-[3/4] transform rotate-[-5deg] hover:rotate-0 transition-transform"
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded flex items-center justify-center text-4xl">
                🌐
              </div>
            </motion.div>

            {/* Mockup 2 */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 aspect-[3/4] transform rotate-[5deg] hover:rotate-0 transition-transform mt-8"
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded flex items-center justify-center text-4xl">
                📱
              </div>
            </motion.div>

            {/* Mockup 3 */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 aspect-[3/4] transform rotate-[3deg] hover:rotate-0 transition-transform -mt-4"
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded flex items-center justify-center text-4xl">
                💼
              </div>
            </motion.div>

            {/* Mockup 4 */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 aspect-[3/4] transform rotate-[-3deg] hover:rotate-0 transition-transform"
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded flex items-center justify-center text-4xl">
                🚀
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Projects
