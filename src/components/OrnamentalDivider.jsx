import React from 'react'

export default function OrnamentalDivider({
  variant = 'gold',
  className = '',
}) {
  const stroke = variant === 'maroon' ? '#4A101C' : '#C6A46A'

  return (
    <div
      className={`flex w-full max-w-md items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span
        className="h-px flex-1"
        style={{
          background: `linear-gradient(to right, transparent, ${stroke})`,
        }}
      />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 2 L16.4 9.2 L24 11.6 L16.4 14 L14 21.2 L11.6 14 L4 11.6 L11.6 9.2 Z"
          stroke={stroke}
          strokeWidth="0.9"
          fill="none"
        />
        <circle cx="14" cy="11.6" r="1.4" fill={stroke} />
      </svg>
      <span
        className="h-px flex-1"
        style={{
          background: `linear-gradient(to left, transparent, ${stroke})`,
        }}
      />
    </div>
  )
}
