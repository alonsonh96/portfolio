// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { ImMail4 } from 'react-icons/im'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/alonsonh96',
      icon: <FaGithubSquare />,
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'from-gray-500 to-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alonso-nh/',
      icon: <FaLinkedin />,
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Email',
      url: 'mailto:nichohuaman16@gmail.com',
      icon: <ImMail4 />,
      color: 'from-gray-600 to-pink-600',
      hoverColor: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <Section
      id='contact'
      className='px-6 bg-linear-to-br from-gray-900 via-black to-gray-900 flex relative'
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl md:blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: isMobile ? 12 : 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-2xl md:blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: isMobile ? 15 : 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-2xl md:blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: isMobile ? 18 : 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: isMobile }}
              transition={{ duration: 0.6 }}
              className='inline-block mb-6'
            >
              <div className='px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full'>
                <span className='text-sm text-gray-300'>
                  📬 Disponible para proyectos
                </span>
              </div>
            </motion.div>

            <motion.h2
              className='text-5xl md:text-7xl font-bold text-white leading-tight mb-6'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: isMobile }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              ¿Listo para
              <br />
              <span className='bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
                colaborar?
              </span>
            </motion.h2>

            <motion.p
              className='text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: isMobile }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Trabajemos juntos para convertir tus ideas en realidad. Estoy
              disponible para proyectos freelance y oportunidades interesantes.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href='mailto:nichohuaman16@gmail.com'
              className='group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: isMobile }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Enviar mensaje</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            {/* Social Links */}
            <motion.div
              className='mt-12 flex gap-4'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: isMobile }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`group relative w-16 h-16 bg-linear-to-br ${
                    hoveredSocial === index ? social.hoverColor : social.color
                  } rounded-xl flex items-center justify-center text-2xl transition-all duration-300`}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  whileHover={{ y: -8, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <span className='relative z-10'>{social.icon}</span>

                  {/* Hover effect */}
                  <div className='absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-xl transition-all duration-300' />

                  {/* Tooltip - solo desktop */}
                  {!isMobile && (
                    <motion.div
                      className='absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <span className='text-xs text-white'>{social.name}</span>
                    </motion.div>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Interactive Card */}
          {!isMobile && (
            <motion.div
              className='relative hidden lg:block'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Floating Card with Glassmorphism */}
              <motion.div
                className='relative w-full aspect-square max-w-lg mx-auto'
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {/* Main Card */}
                <div className='relative w-full h-full bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 overflow-hidden'>
                  {/* Animated gradient overlay */}
                  <motion.div
                    className='absolute inset-0 bg-linear-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20'
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />

                  {/* Content inside card */}
                  <div className='relative z-10 h-full flex flex-col items-center justify-center text-center'>
                    {/* Animated emoji */}
                    <motion.div
                      className='text-8xl mb-6'
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      🚀
                    </motion.div>

                    <h3 className='text-3xl font-bold text-white mb-4'>
                      ¡Hablemos!
                    </h3>

                    <p className='text-gray-300 mb-6 max-w-xs'>
                      Transformemos tu visión en una realidad digital increíble
                    </p>

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 w-full mt-8'>
                      {[
                        { label: 'Proyectos', value: '15+' },
                        { label: 'Clientes', value: '10+' },
                        { label: 'Años', value: '2+' }
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          className='bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10'
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className='text-2xl font-bold text-white'>
                            {stat.value}
                          </div>
                          <div className='text-xs text-gray-400'>
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className='absolute top-4 right-4 w-20 h-20 bg-linear-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl'
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  <motion.div
                    className='absolute bottom-4 left-4 w-32 h-32 bg-linear-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl'
                    animate={{
                      scale: [1.5, 1, 1.5],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </div>

                {/* Orbiting elements */}
                <motion.div
                  className='absolute top-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50'
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  style={{
                    transformOrigin: '0 250px'
                  }}
                />
                <motion.div
                  className='absolute top-1/2 left-0 w-4 h-4 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50'
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  style={{
                    transformOrigin: '250px 0'
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </Section>
  )
}

export default Contact
