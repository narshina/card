import React from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Flower2, Heart, MapPin } from 'lucide-react'
import { wedding } from '../config/wedding'

export default function FinalInvitation() {
  return (
    <section className="final-invitation" aria-label="Closing invitation">
      <motion.div
        className="invitation-paper"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="invitation-florals" aria-hidden="true" />
        <div className="invitation-content">
          <div className="invitation-mark" aria-hidden="true">
            <span />
            <Flower2 size={13} strokeWidth={1.2} />
            <span />
          </div>

          <h2 className="invitation-message">We can&apos;t wait to celebrate with you</h2>

          <div className="invitation-couple">
            <p>{wedding.bride.fullName}</p>
            <span className="invitation-ampersand">&amp;</span>
            <p>{wedding.groom.fullName}</p>
          </div>

          <div className="invitation-details">
            <p className="invitation-date">
              <CalendarDays size={13} strokeWidth={1.4} aria-hidden="true" />
              {wedding.dateDisplay}
            </p>
            <p className="invitation-venue">
              <MapPin size={13} strokeWidth={1.4} aria-hidden="true" />
              {wedding.venue.name}
            </p>
            <p className="invitation-city">{wedding.venue.city}</p>
          </div>

          <div className="invitation-footer">
            <span />
            <div className="invitation-icons" aria-hidden="true">
              <CalendarDays size={13} strokeWidth={1.3} />
              <Heart size={13} strokeWidth={1.3} />
              <Flower2 size={13} strokeWidth={1.3} />
            </div>
            <p>With love, {wedding.coupleShort}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
