import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import OrnamentalDivider from './OrnamentalDivider'

export default function WeddingCurtainIntro({ onOpened }) {
  const [opening, setOpening] = useState(false)

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    window.setTimeout(() => onOpened(), 1700)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOpen()
    }
  }

  return (
    <motion.section
      className="curtain-screen"
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Open wedding invitation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="curtain-sheen" aria-hidden="true" />
      <div className="curtain-chandelier" aria-hidden="true" />
      <div className="curtain-branch" aria-hidden="true" />
      <div className="flower-arrangement flower-arrangement-left" aria-hidden="true" />
      <div className="flower-arrangement flower-arrangement-right" aria-hidden="true" />

      <motion.div
        className="curtain-intro-text"
        initial={{ opacity: 1, y: 0, scale: 1 }}
        animate={opening ? { opacity: 0, y: -18, scale: 0.96 } : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="curtain-headline"
          initial={{ opacity: 0, y: 18 }}
          animate={opening ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          A Beautiful Beginning
        </motion.p>

        <motion.div
          className="curtain-cta"
          animate={opening ? { opacity: 0 } : { opacity: [0.6, 1, 0.6] }}
          transition={opening ? { duration: 0.2 } : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span>Tap to Open</span>
          <span className="curtain-arrow" aria-hidden="true" />
        </motion.div>
      </motion.div>

      <div className="curtain-stage" aria-hidden="true" />

      <div className="curtain-panels" aria-hidden="true">
        <motion.div
          className="curtain-panel curtain-panel-left"
          initial={{ x: 0, rotateY: 0 }}
          animate={opening ? { x: '-120%', rotateY: -12, filter: 'brightness(1.08)' } : { x: 0, rotateY: 0, filter: 'brightness(1)' }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="curtain-panel curtain-panel-right"
          initial={{ x: 0, rotateY: 0 }}
          animate={opening ? { x: '120%', rotateY: 12, filter: 'brightness(1.08)' } : { x: 0, rotateY: 0, filter: 'brightness(1)' }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <AnimatePresence>
        {opening && (
          <motion.div
            className="curtain-reveal"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="reveal-subtitle"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Together with their families
            </motion.p>

            <motion.div
              className="reveal-name-stack"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <h1> AISHA </h1>
              <span>&</span>
              <h1> AARON </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.7 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
            >
              <OrnamentalDivider className="reveal-divider" />
            </motion.div>

            <motion.p
              className="reveal-script"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Request the pleasure of your company
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
