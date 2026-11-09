import React from 'react'
import { motion } from 'framer-motion'

export default function FloralOrnament({
  color = '#C6A46A',
  className = '',
  floating = false,
}) {
  const svg = (
    <svg
      className={`h-16 w-16 sm:h-20 sm:w-20 ${className}`}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="4" fill={color} />
      <path
        d="M40 12 C36 24 36 28 40 40 C44 28 44 24 40 12 Z"
        stroke={color}
        strokeWidth="1"
        fill={`${color}22`}
      />
      <path
        d="M40 68 C36 56 36 52 40 40 C44 52 44 56 40 68 Z"
        stroke={color}
        strokeWidth="1"
        fill={`${color}22`}
      />
      <path
        d="M12 40 C24 36 28 36 40 40 C28 44 24 44 12 40 Z"
        stroke={color}
        strokeWidth="1"
        fill={`${color}22`}
      />
      <path
        d="M68 40 C56 36 52 36 40 40 C52 44 56 44 68 40 Z"
        stroke={color}
        strokeWidth="1"
        fill={`${color}22`}
      />
      <path
        d="M20 20 C30 30 32 32 40 40 C32 32 30 30 20 20 Z"
        stroke={color}
        strokeWidth="0.8"
      />
      <path
        d="M60 20 C50 30 48 32 40 40 C48 32 50 30 60 20 Z"
        stroke={color}
        strokeWidth="0.8"
      />
      <path
        d="M20 60 C30 50 32 48 40 40 C32 48 30 50 20 60 Z"
        stroke={color}
        strokeWidth="0.8"
      />
      <path
        d="M60 60 C50 50 48 48 40 40 C48 48 50 50 60 60 Z"
        stroke={color}
        strokeWidth="0.8"
      />
      <circle cx="40" cy="40" r="18" stroke={color} strokeWidth="0.4" opacity="0.5" />
    </svg>
  )

  if (!floating) return svg

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {svg}
    </motion.div>
  )
}
