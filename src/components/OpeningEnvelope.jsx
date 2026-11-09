import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import OrnamentalDivider from './OrnamentalDivider'
import CornerOrnament from './CornerOrnament'

export default function OpeningEnvelope({ onOpened }) {
  const [opening, setOpening] = useState(false)

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    window.setTimeout(() => onOpened(), 2100)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOpen()
    }
  }

  return (
    <motion.section
      className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-maroon px-5 pattern-overlay"
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Open wedding invitation"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(20,4,8,0.55)_100%)]" />

      <motion.p
        className="relative mb-8 font-serif text-sm tracking-[0.35em] text-gold-light uppercase sm:text-base"
        initial={{ opacity: 0, y: 12 }}
        animate={opening ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        You Are Cordially Invited
      </motion.p>

      <div className="relative w-full max-w-[380px]" style={{ perspective: 1400 }}>
        <motion.div
          className="relative aspect-[3/4] w-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={opening ? { y: -16 } : { y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-sm border border-gold/55 bg-maroon-deep shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-3 border border-gold/30" />
            <div className="absolute inset-5 border border-gold/12" />

            <CornerOrnament className="absolute bottom-6 left-6" position="bl" />
            <CornerOrnament className="absolute right-6 bottom-6" position="br" />

            <motion.div
              className="absolute inset-x-8 bottom-[18%] flex flex-col items-center text-center"
              aria-hidden={!opening}
              initial={{ opacity: 0, y: 16 }}
              animate={opening ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: opening ? 0.55 : 0, duration: 0.8 }}
            >
              <p className="font-display text-xl tracking-[0.28em] text-gold-light sm:text-2xl">
                {wedding.coupleNames}
              </p>
            </motion.div>
          </div>

          <motion.div
            className="absolute inset-x-0 top-0 z-20 h-[54%] origin-top"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
            animate={opening ? { rotateX: -168 } : { rotateX: 0 }}
            transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <div className="envelope-flap relative h-full w-full bg-gradient-to-b from-[#6a1c2c] via-maroon-rich to-[#3d0e18] shadow-[0_18px_30px_rgba(0,0,0,0.28)]">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polyline
                  points="1,1 99,1 50,99 1,1"
                  fill="none"
                  stroke="#C6A46A"
                  strokeWidth="0.7"
                  opacity="0.7"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[50%] left-1/2 z-30 flex h-[108px] w-[108px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full sm:h-[120px] sm:w-[120px]"
            animate={
              opening
                ? { scale: 0.15, opacity: 0, y: -48 }
                : { scale: 1, opacity: 1, y: 0 }
            }
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <motion.div
              className="wax-seal relative flex h-full w-full items-center justify-center rounded-full"
              animate={opening ? {} : { scale: [1, 1.035, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-[9px] rounded-full border border-[#4A101C]/35" />
              <div className="absolute inset-[14px] rounded-full border border-[#4A101C]/20" />
              <span className="font-display text-lg tracking-[0.18em] text-maroon-deep sm:text-xl">
                {wedding.initials}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <OrnamentalDivider className="relative mt-10" />

      <motion.p
        className="relative mt-6 font-serif text-sm tracking-[0.42em] text-ivory/80 uppercase"
        animate={opening ? { opacity: 0 } : { opacity: [0.45, 1, 0.45] }}
        transition={
          opening
            ? { duration: 0.3 }
            : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        Tap to Open
      </motion.p>
    </motion.section>
  )
}
