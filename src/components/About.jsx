// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'

const About = () => {
  // const skills = [
  //   { icon: '⚡', label: 'Rapido' },
  //   { icon: '🎨', label: 'Creativo' },
  //   { icon: '🚀', label: 'Escalable' },
  //   { icon: '💡', label: 'Innovador+' }
  // ];

  const isMobile = window.innerWidth < 768

  return (
    <Section
      id='about-me'
      className='px-6 bg-linear-to-r from-[#1a2332] via-gray-900 to-black flex relative'
    >
      {/* Animated background */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl md:blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: isMobile ? 8 : 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-2xl md:blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10'>
        <div className='flex flex-col-reverse lg:flex-row gap-6 lg:gap-16 items-center'>
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: isMobile, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='flex-1'
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full">
                <span className="text-sm text-purple-300">👨‍💻 Desarrollador Full Stack</span>
              </div>
            </motion.div> */}

            <motion.h2
              className='text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: isMobile, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              Sobre{' '}
              <span className='bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
                mí
              </span>
            </motion.h2>

            {/* Animated underline */}
            <div className='space-y-2 mb-6'>
              <motion.div
                className='h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full'
                initial={{ width: 0 }}
                whileInView={{ width: '120px' }}
                viewport={{ once: isMobile, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              />
              <motion.div
                className='h-0.5 bg-linear-to-r from-purple-400/70 to-pink-400/70 rounded-full'
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: isMobile, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              />
            </div>

            <motion.p
              className='text-base md:text-lg text-gray-400 mb-6 leading-relaxed'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: isMobile, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hola, soy <span className='text-white font-semibold'>Alonso</span>
              , Ingeniero de Sistemas y desarrollador web con enfoque en
              Frontend y Backend. Me especializo en crear aplicaciones modernas,
              escalables y bien estructuradas, combinando buenas prácticas de
              desarrollo con una experiencia de usuario cuidada.
            </motion.p>

            <motion.p
              className='text-base md:text-lg text-gray-400 mb-8 leading-relaxed'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: isMobile, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Más allá del código, mantengo una curiosidad constante por nuevas
              tecnologías, patrones de diseño y optimización de rendimiento.
            </motion.p>

            {/* Skills badges */}
            {/* <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  className="group px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span className="text-xl mr-2 group-hover:scale-110 inline-block transition-transform">
                    {skill.icon}
                  </span>
                  <span className="text-sm text-gray-300">{skill.label}</span>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right Side - Image with effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: isMobile, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className='flex-1 relative flex justify-center mt-28 sm:mt-0'
          >
            {/* Floating container */}
            <motion.div
              className='relative'
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              {/* Glow rings */}
              <motion.div
                className='absolute inset-0 rounded-full'
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  background:
                    'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)',
                  filter: isMobile ? 'blur(30px)' : 'blur(50px)'
                }}
              />

              <motion.div
                className='absolute inset-0 rounded-full'
                animate={{
                  scale: [1.15, 1, 1.15],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: isMobile ? 8 : 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  background:
                    'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
                  filter: isMobile ? 'blur(30px)' : 'blur(50px)'
                }}
              />

              {/* Main image container */}
              <div className='relative'>
                {/* Decorative ring */}
                <motion.div
                  className='absolute inset-0 rounded-full border-2 border-purple-500/30'
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear'
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }
                  }}
                  style={{
                    transformOrigin: 'center'
                  }}
                />

                {/* Image */}
                <motion.div
                  className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src='/about.webp'
                    alt='Foto de Alonso'
                    className='w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/10'
                  />

                  {/* Gradient overlay */}
                  <div className='absolute inset-0 rounded-full bg-linear-to-r from-purple-500/20 via-transparent to-pink-500/20 pointer-events-none' />
                </motion.div>

                {/* Orbiting dots */}
                <motion.div
                  className='absolute inset-0'
                  animate={{ rotate: 360}}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className='absolute top-0 left-1/2 w-3 h-3 rounded-full bg-purple-500' />
                  <div className='absolute bottom-4 left-1/4 w-3 h-3 rounded-full bg-pink-500' />
                  <div className='absolute right-4 top-1/2 w-3 h-3 rounded-full bg-blue-500' />
                </motion.div>
              </div>

              {/* Floating badge */}
              {/* <motion.div
                className="absolute -bottom-6 -right-6 bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl shadow-2xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
                animate={{
                  y: [0, -10, 0],
                }}
              >
                <div className="text-2xl font-bold">3+</div>
                <div className="text-xs">Años exp.</div>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default About
