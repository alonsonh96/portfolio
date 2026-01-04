import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

const Navigation = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-b border-white/5 z-40"
    >
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            AN
          </motion.a>
          <div className="flex gap-8">
            {['Sobre mí', 'Proyectos', 'Contacto'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
