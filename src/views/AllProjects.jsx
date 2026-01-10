// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import Lenis from 'lenis'
import { useEffect, useState } from 'react'

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true
    })

    function raf (time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Desarrollo web' },
    { id: 'ai', label: 'IA y aprendizaje automático' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const projects = [
    {
      id: 1,
      year: '2025',
      title: 'Invervyou AI',
      description:
        'AI Based Interview Preparation Website created to help fresh graduates and job seekers prepare for interviews and optimize th...',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      tags: [
        'NextJS',
        'TypeScript',
        'Shadcn UI',
        'Tailwind CSS',
        'Prisma',
        'MySQL',
        'Midtrans',
        'Gemini API',
        'GCP'
      ],
      category: 'ai',
      gradient: 'from-blue-900/30 to-cyan-900/30'
    },
    {
      id: 2,
      year: '2024',
      title: 'Mind Mirror',
      description:
        'LMS website that integrated Generative AI feauture to track student various keys like mood, behavior, and cognitive ability w...',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      tags: ['PHP', 'Laravel', 'Bootstrap', 'MySQL', 'jQuery', 'DataTables'],
      category: 'ai',
      gradient: 'from-purple-900/30 to-pink-900/30'
    },
    {
      id: 3,
      year: '2024',
      title: 'E-Commerce Platform',
      description:
        'Full-stack marketplace with real-time inventory management, payment processing, and advanced analytics dashboard for sellers.',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
      category: 'fullstack',
      gradient: 'from-green-900/30 to-emerald-900/30'
    },
    {
      id: 4,
      year: '2024',
      title: 'Task Management App',
      description:
        'Collaborative project management tool with real-time updates, team chat, and advanced reporting features.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'WebSockets', 'Tailwind'],
      category: 'web',
      gradient: 'from-orange-900/30 to-red-900/30'
    },
    {
      id: 5,
      year: '2023',
      title: 'Portfolio CMS',
      description:
        'Content management system for creative professionals to showcase their work with customizable themes and layouts.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['React', 'Express', 'MongoDB', 'AWS S3', 'Cloudinary'],
      category: 'web',
      gradient: 'from-indigo-900/30 to-purple-900/30'
    },
    {
      id: 6,
      year: '2023',
      title: 'Analytics Dashboard',
      description:
        'Real-time analytics platform with interactive charts, custom reports, and data export functionality.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      category: 'fullstack',
      gradient: 'from-cyan-900/30 to-blue-900/30'
    }
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(p => p.category === activeFilter)

  return (
    <section
      id='all-projects'
      className='min-h-screen py-10 md:py-20 px-6 bg-linear-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden'
    >
      {/* Background effects */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.button
          onClick={() => navigate('/#projects')}
          className='px-6 py-3 mb-3 bg-white/5 border border-white/20 text-white rounded-xl font-medium hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer'
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Volver
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className='mb-16 text-center'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Todos mis{' '}
            <span className='bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              proyectos
            </span>
          </h2>

          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Explora mi trabajo reciente y descubre las tecnologías que utilizo
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-4 mb-16'
        >
          {filters.map(filter => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group'
            >
              <motion.div
                className='relative bg-linear-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 cursor-pointer'
                whileHover={{ y: -8 }}
              >
                {/* Year Badge */}
                <div className='absolute top-4 left-4 z-10'>
                  <div className='px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg border border-white/20'>
                    <span className='text-white font-semibold text-sm'>
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Image Container */}
                <div className='relative h-64 overflow-hidden'>
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${project.gradient}`}
                  />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500'
                  />

                  {/* Overlay gradient */}
                  <div className='absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent' />

                  {/* Hover effect */}
                  <motion.div
                    className='absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300'>
                    {project.title}
                  </h3>

                  <p className='text-gray-400 mb-6 leading-relaxed line-clamp-2'>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className='text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 hover:border-blue-500/30 transition-all'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <motion.div
                    className='mt-6 flex items-center gap-2 text-blue-400 font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300'
                    whileHover={{ x: 5 }}
                  >
                    <span>Ver proyecto</span>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Load more button (optional) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className='text-center mt-16'
        >
          <motion.button
            className='px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-blue-500/30 transition-all backdrop-blur-sm'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver más proyectos
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  )
}

export default AllProjects
