import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { wedding } from '../config/wedding'
import OrnamentalDivider from './OrnamentalDivider'
import FloralOrnament from './FloralOrnament'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-maroon px-6 py-20 text-center pattern-overlay">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,164,106,0.08),transparent_55%)]" />

      <motion.div
        className="relative mb-8"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.15}
      >
        <FloralOrnament floating />
      </motion.div>

      <motion.p
        className="relative font-serif text-sm tracking-[0.35em] text-gold uppercase sm:text-base"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.3}
      >
        Together with their families
      </motion.p>

      <motion.div
        className="relative my-8 flex flex-col items-center"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.5}
      >
        <h1 className="font-display text-[2.6rem] leading-tight font-medium tracking-[0.18em] text-ivory sm:text-6xl md:text-7xl">
          {wedding.groom.firstName.toUpperCase()}
        </h1>
        <OrnamentalDivider className="my-5" />
        <h1 className="font-display text-[2.6rem] leading-tight font-medium tracking-[0.18em] text-ivory sm:text-6xl md:text-7xl">
          {wedding.bride.firstName.toUpperCase()}
        </h1>
      </motion.div>

      <motion.p
        className="relative max-w-md font-serif text-lg text-ivory/85 italic sm:text-xl"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.75}
      >
        Request the pleasure of your company
      </motion.p>

      <motion.p
        className="relative mt-8 font-arabic text-xl text-gold/90 sm:text-2xl"
        dir="rtl"
        lang="ar"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.95}
      >
        بارك الله لكما
      </motion.p>

      <motion.a
        href="#invitation"
        className="relative mt-16 flex flex-col items-center gap-2 text-gold"
        aria-label="Scroll to invitation details"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-serif text-[0.7rem] tracking-[0.35em] uppercase">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5" strokeWidth={1.4} />
      </motion.a>
    </section>
  )
}
