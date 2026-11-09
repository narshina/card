import React from 'react'
import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import OrnamentalDivider from './OrnamentalDivider'

const item = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function DateSection() {
  return (
    <section className="relative overflow-hidden bg-maroon px-5 py-24 text-center pattern-overlay sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,164,106,0.1),transparent_60%)]" />

      <motion.p
        className="relative font-serif text-sm tracking-[0.38em] text-gold uppercase"
        variants={item}
        initial="hidden"
        whileInView="show"
        custom={0}
        viewport={{ once: true, amount: 0.4 }}
      >
        Save the Date
      </motion.p>

      <div className="relative mx-auto mt-12 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
        <motion.div
          className="flex flex-col items-center"
          variants={item}
          initial="hidden"
          whileInView="show"
          custom={1}
          viewport={{ once: true }}
        >
          <span className="font-display text-6xl tracking-[0.12em] text-ivory sm:text-7xl">
            {wedding.day}
          </span>
          <span className="mt-2 font-serif text-xs tracking-[0.3em] text-gold uppercase">
            Day
          </span>
        </motion.div>

        <motion.div
          className="hidden h-16 w-px bg-gold/40 sm:block"
          variants={item}
          initial="hidden"
          whileInView="show"
          custom={1.5}
          viewport={{ once: true }}
        />

        <motion.div
          className="flex flex-col items-center"
          variants={item}
          initial="hidden"
          whileInView="show"
          custom={2}
          viewport={{ once: true }}
        >
          <span className="font-display text-3xl tracking-[0.28em] text-gold uppercase sm:text-4xl">
            {wedding.month}
          </span>
          <span className="mt-3 font-serif text-xs tracking-[0.3em] text-gold/80 uppercase">
            Month
          </span>
        </motion.div>

        <motion.div
          className="hidden h-16 w-px bg-gold/40 sm:block"
          variants={item}
          initial="hidden"
          whileInView="show"
          custom={2.5}
          viewport={{ once: true }}
        />

        <motion.div
          className="flex flex-col items-center"
          variants={item}
          initial="hidden"
          whileInView="show"
          custom={3}
          viewport={{ once: true }}
        >
          <span className="font-display text-5xl tracking-[0.16em] text-ivory sm:text-6xl">
            {wedding.year}
          </span>
          <span className="mt-2 font-serif text-xs tracking-[0.3em] text-gold uppercase">
            Year
          </span>
        </motion.div>
      </div>

      <OrnamentalDivider className="relative mx-auto mt-12" />

      <motion.p
        className="relative mt-8 font-serif text-xl tracking-[0.28em] text-ivory/90 uppercase"
        variants={item}
        initial="hidden"
        whileInView="show"
        custom={4}
        viewport={{ once: true }}
      >
        {wedding.dayName}
      </motion.p>
    </section>
  )
}
