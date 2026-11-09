import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { wedding } from '../config/wedding'
import OrnamentalDivider from './OrnamentalDivider'

export default function LocationSection() {
  const [mapOpen, setMapOpen] = useState(false)

  return (
    <section className="relative bg-ivory px-5 py-24 ivory-pattern sm:px-8 sm:py-32">
      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-serif text-sm tracking-[0.32em] text-gold-dark uppercase">
          Venue
        </p>
        <h2 className="mt-4 font-display text-2xl tracking-[0.08em] text-maroon sm:text-4xl">
          Where Two Hearts Become One
        </h2>
        <OrnamentalDivider variant="maroon" className="mt-8 opacity-80" />

        <div className="mt-10 flex flex-col items-center">
          <MapPin className="h-8 w-8 text-gold-dark" strokeWidth={1.3} />
          <h3 className="mt-4 font-display text-xl tracking-[0.1em] text-maroon sm:text-2xl">
            {wedding.venue.name}
          </h3>
          <p className="mt-2 font-serif text-base text-maroon/75">
            {wedding.venue.city}
          </p>
          <p className="mt-5 font-serif text-sm tracking-wide text-maroon/80">
            {wedding.dateDisplay} · {wedding.timeDisplay}
          </p>
        </div>

        <button
          type="button"
          aria-expanded={mapOpen}
          aria-controls="venue-map"
          onClick={() => setMapOpen((open) => !open)}
          className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 border border-gold bg-transparent px-8 py-3 font-serif text-sm tracking-[0.2em] text-maroon uppercase transition-colors duration-300 hover:bg-gold hover:text-maroon-deep focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
        >
          <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          {mapOpen ? 'Hide Map' : 'View on Google Maps'}
        </button>

        <AnimatePresence initial={false}>
          {mapOpen && (
            <motion.div
              id="venue-map"
              key="venue-map"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 w-full overflow-hidden border border-gold/60 shadow-[0_16px_40px_rgba(74,16,28,0.08)]"
            >
              <iframe
                title={`Map of ${wedding.venue.name}`}
                src={wedding.venue.mapsEmbedUrl}
                className="aspect-[4/3] w-full grayscale-[20%] contrast-[0.95] sm:aspect-video"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href={wedding.venue.mapsDirectionsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 border border-gold bg-transparent px-8 py-3 font-serif text-sm tracking-[0.28em] text-maroon uppercase transition-colors duration-300 hover:bg-gold hover:text-maroon-deep focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
        >
          <Navigation className="h-4 w-4" strokeWidth={1.5} />
          Get Directions
        </a>
      </motion.div>
    </section>
  )
}
