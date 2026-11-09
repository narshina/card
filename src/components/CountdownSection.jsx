import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { wedding } from '../config/wedding'

function getRemaining(target) {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) {
    return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    done: false,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Unit({ value, label }) {
  const padded = String(value).padStart(2, '0')

  return (
    <div className="flex min-w-[72px] flex-col items-center sm:min-w-[96px]">
      <div className="flex aspect-square w-full max-w-[104px] items-center justify-center border border-gold/70 bg-maroon/40 sm:max-w-[112px]">
        <span className="font-display text-3xl tracking-wider text-ivory tabular-nums sm:text-4xl">
          {padded}
        </span>
      </div>
      <span className="mt-3 font-serif text-[0.65rem] tracking-[0.32em] text-gold uppercase sm:text-xs">
        {label}
      </span>
    </div>
  )
}

export default function CountdownSection() {
  const target = useMemo(() => new Date(wedding.dateISO), [])
  const [time, setTime] = useState(() => getRemaining(target))

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(getRemaining(target))
    }, 1000)

    return () => window.clearInterval(id)
  }, [target])

  return (
    <section className="relative bg-maroon-deep px-5 py-20 text-center sm:py-24">
      <motion.div
        className="mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-serif text-sm tracking-[0.38em] text-gold uppercase sm:text-base">
          The Celebration Begins In
        </h2>

        {time.done ? (
          <p className="mt-10 font-display text-2xl tracking-[0.18em] text-ivory sm:text-3xl">
            The celebration is here
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 justify-items-center gap-5 sm:flex sm:justify-center sm:gap-6">
            <Unit value={time.days} label="Days" />
            <Unit value={time.hours} label="Hours" />
            <Unit value={time.minutes} label="Minutes" />
            <Unit value={time.seconds} label="Seconds" />
          </div>
        )}
      </motion.div>
    </section>
  )
}
