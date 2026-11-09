import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import LocationSection from './components/LocationSection'

describe('wedding curtain reveal', () => {
  it('shows the closed curtain intro before the names are revealed', () => {
    render(<App />)

    expect(screen.getByText('A Beautiful Beginning')).toBeInTheDocument()
    expect(screen.getByText('Tap to Open')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /open wedding invitation/i }))

    expect(screen.getByText('Together with their families')).toBeInTheDocument()
    expect(screen.getByText('AISHA')).toBeInTheDocument()
    expect(screen.getByText('AARON')).toBeInTheDocument()
  })
})

describe('venue map', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe() {}
        unobserve() {}
        disconnect() {}
      },
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('shows the map only after the visitor requests it', () => {
    render(<LocationSection />)

    expect(screen.queryByTitle(/map of/i)).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /view on google maps/i }))

    expect(screen.getByTitle(/map of/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /hide map/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
