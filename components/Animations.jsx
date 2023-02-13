'use client'

import { motion } from 'framer-motion'

export const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
)

export const FadeInSection = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 30 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ delay: delay }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}
