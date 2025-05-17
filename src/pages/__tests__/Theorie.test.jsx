import React from 'react'
import { render, screen } from '@testing-library/react'
import Theorie from '../Theorie'
import theoryData from '../../data/theory.json'

describe('Theorie-Seite', () => {
  it('rendert die Überschrift und das erste Kapitel', () => {
    render(<Theorie />)
    // Seiten-Überschrift
    expect(
      screen.getByRole('heading', { name: /theorie/i })
    ).toBeInTheDocument()
    // Erster Kapitel-Titel aus der JSON
    expect(
      screen.getByRole('heading', { name: theoryData[0].title })
    ).toBeInTheDocument()
  })
})
