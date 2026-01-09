// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'

const Projects = () => {
  return (
    <Section 
      id="proyectos" 
      className="py-20 px-6 bg-linear-to-br from-gray-900 via-[#1a2332] to-black flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
                <span className="text-sm text-blue-300">💼 Portfolio</span>
              </div>
            </motion.div> */}

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              Mis{' '}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                proyectos
              </span>
            </motion.h2>

            {/* Animated underline */}
            <div className="space-y-2 mb-4">
              <motion.div
                className="h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '120px' }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              />
              <motion.div
                className="h-0.5 bg-linear-to-r from-blue-400/70 to-cyan-400/70 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              />
            </div>

            <motion.p
              className="text-md md:text-xl text-gray-400 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Estos son algunos de mis proyectos que he realizado y en los que
              estoy trabajando actualmente.
            </motion.p>

            {/* Stats */}
            {/* <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {[
                { label: 'Completados', value: '15+', icon: '✓' },
                { label: 'En curso', value: '3', icon: '⚡' },
                { label: 'Tecnologías', value: '10+', icon: '🔧' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-sm text-gray-500 mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div> */}

            {/* CTA Button */}
            <motion.a
              href="#all-projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Ver todos los proyectos</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Right Side - Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2 w-full"
          >
            {/* Floating container with perspective */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-3xl scale-95" />
              
              {/* Image container with glassmorphism */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-2xl">
                <motion.img
                  src="/src/assets/projects.webp"
                  alt="Projects showcase"
                  className="w-full h-auto object-contain rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-transparent to-cyan-500/10 rounded-2xl pointer-events-none" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.6 }}
                animate={{
                  y: [0, -10, 0],
                }}
                // transition={{
                //   duration: 3,
                //   repeat: Infinity,
                //   ease: "easeInOut"
                // }}
              >
                ✨ Nuevos proyectos
              </motion.div>

              {/* <motion.div
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg text-sm"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                // transition={{ duration: 0.5, delay: 0.8 }}
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀 Stack moderno
              </motion.div> */}

              {/* Orbiting dot */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformOrigin: '-120px 0',
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </Section>
  )
}

export default Projects
