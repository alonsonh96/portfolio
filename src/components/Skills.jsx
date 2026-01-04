// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Section from './Section';

const Skills = () => {

  const skills = [
    { name: 'React & Next.js', level: 'Expert' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'System Design', level: 'Advanced' },
    { name: 'Cloud (AWS/GCP)', level: 'Intermediate' },
    { name: 'DevOps & CI/CD', level: 'Intermediate' }
  ];

  return (
    <Section id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-sm uppercase tracking-widest text-gray-400 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-500">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Skills
