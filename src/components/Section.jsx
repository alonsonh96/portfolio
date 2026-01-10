// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import { forwardRef } from "react"

const Section = forwardRef(({ children, className = "", id }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={`
        min-h-svh
        flex
        items-center
        relative
        panel 
        ${className}
      `}
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
})

export default Section