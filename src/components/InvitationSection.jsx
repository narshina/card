import React from 'react'
import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'
import OrnamentalDivider from './OrnamentalDivider'
import CornerOrnament from './CornerOrnament'

const cardReveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

function FamilyBlock({ title, name, relation, parents }) {
  return (
    <div className="text-center">
      <p className="font-serif text-xs tracking-[0.38em] text-gold-dark uppercase">
        {title}
      </p>
      <h3 className="mt-3 font-display text-2xl tracking-[0.12em] text-maroon sm:text-3xl">
        {name}
      </h3>
      <p className="mt-3 font-serif text-sm tracking-wide text-maroon/70">
        {relation}
      </p>
      <p className="mt-1 font-serif text-base text-maroon/90 sm:text-lg">
        {parents.father} & {parents.mother}
      </p>
    </div>
  )
}

export default function InvitationSection() {
  return (
    <section
      id="invitation"
      className="relative bg-ivory px-5 py-24 ivory-pattern sm:px-8 sm:py-32"
    >
      <motion.div
        className="relative mx-auto max-w-3xl border border-gold/70 bg-ivory/90 px-6 py-14 shadow-[0_20px_60px_rgba(74,16,28,0.08)] sm:px-14 sm:py-16"
        variants={cardReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="pointer-events-none absolute inset-2 border border-gold/35" />
        <CornerOrnament
          color="#4A101C"
          className="absolute top-4 left-4 opacity-70"
          position="tl"
        />
        <CornerOrnament
          color="#4A101C"
          className="absolute top-4 right-4 opacity-70"
          position="tr"
        />
        <CornerOrnament
          color="#4A101C"
          className="absolute bottom-4 left-4 opacity-70"
          position="bl"
        />
        <CornerOrnament
          color="#4A101C"
          className="absolute right-4 bottom-4 opacity-70"
          position="br"
        />

        <div className="relative flex flex-col items-center text-center">
          <p className="font-serif text-sm tracking-[0.32em] text-gold-dark uppercase">
            With the blessings of Allah
          </p>
          <h2 className="mt-4 max-w-lg font-display text-2xl tracking-[0.08em] text-maroon sm:text-3xl">
            Two families, one beautiful beginning
          </h2>

          <OrnamentalDivider variant="maroon" className="my-10 opacity-80" />

          <div className="grid w-full gap-12 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-8">
            <FamilyBlock
              title="Bride"
              name={wedding.bride.fullName}
              relation="Daughter of"
              parents={wedding.bride.parents}
            />
            <div className="hidden h-24 w-px bg-gradient-to-b from-transparent via-gold to-transparent sm:block" />
            <FamilyBlock
              title="Groom"
              name={wedding.groom.fullName}
              relation="Son of"
              parents={wedding.groom.parents}
            />
          </div>

          <OrnamentalDivider variant="maroon" className="my-10 opacity-80" />

          <p
            className="font-arabic text-2xl leading-relaxed text-maroon sm:text-3xl"
            dir="rtl"
            lang="ar"
          >
            {wedding.quotes.bismillah.arabic}
          </p>
          <p className="mt-4 max-w-md font-serif text-sm text-maroon/70 italic sm:text-base">
            {wedding.quotes.bismillah.translation}
          </p>
        </div>
      </motion.div>
    </section>
  )
}
