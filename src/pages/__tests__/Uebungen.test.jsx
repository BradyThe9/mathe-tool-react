import React from 'react'
import { render, screen } from '@testing-library/react'
import Uebungen from '../Uebungen'
import exercises from '../../data/exercises.json'

describe('Übungen-Seite', () => {
  it('zeigt die Überschrift und mindestens eine Übung an', () => {
    render(<Uebungen />)
    // Seiten-Überschrift
    expect(
      screen.getByRole('heading', { name: /übungen/i })
    ).toBeInTheDocument()
    // Erste Frage aus der JSON
    expect(
      screen.getByText(exercises[0].question)
    ).toBeInTheDocument()
  })
})
