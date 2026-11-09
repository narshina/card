import React from 'react'

export default function CornerOrnament({
  color = '#C6A46A',
  position = 'tl',
  className = '',
}) {
  const rotations = {
    tl: 'rotate-0',
    tr: 'rotate-90',
    br: 'rotate-180',
    bl: '-rotate-90',
  }

  return (
    <svg
      className={`h-10 w-10 sm:h-12 sm:w-12 ${rotations[position]} ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4 H22 M4 4 V22"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="square"
      />
      <path
        d="M8 8 H18 M8 8 V18"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.7"
      />
      <path
        d="M8 8 C14 8 14 16 20 16"
        stroke={color}
        strokeWidth="0.7"
        fill="none"
      />
      <path
        d="M8 8 C8 14 16 14 16 20"
        stroke={color}
        strokeWidth="0.7"
        fill="none"
      />
      <circle cx="8" cy="8" r="1.4" fill={color} />
    </svg>
  )
}
