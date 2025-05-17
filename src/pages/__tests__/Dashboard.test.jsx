import React from 'react'
import { render, screen } from '@testing-library/react'
import Dashboard from '../Dashboard'

describe('Dashboard-Seite', () => {
  it('zeigt die Hauptüberschrift und Beispiel-Karten an', () => {
    render(<Dashboard />)
    // Überschrift
    expect(
      screen.getByRole('heading', { name: /dashboard/i })
    ).toBeInTheDocument()
    // Karte "Willkommen"
    expect(
      screen.getByText(/schön, dass du hier bist/i)
    ).toBeInTheDocument()
    // Karte "Letzte Aktivitäten"
    expect(
      screen.getByText(/letzte aktivitäten/i)
    ).toBeInTheDocument()
  })
})
