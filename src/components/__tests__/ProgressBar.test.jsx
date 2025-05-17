// src/components/__tests__/ProgressBar.test.jsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProgressContext } from '../../context/ProgressContext'
import ProgressBar from '../ProgressBar'

describe('ProgressBar-Komponente', () => {
  it('zeigt korrekten Fortschritt an', () => {
    const value = { completed: 2, setCompleted: () => {} }
    render(
      <ProgressContext.Provider value={value}>
        <ProgressBar />
      </ProgressContext.Provider>
    )
    // Text "Fortschritt: 2 / 3"
    expect(
      screen.getByText(/Fortschritt: 2 \/ 3/i)
    ).toBeInTheDocument()
    // Role progressbar ist vorhanden
    expect(
      screen.getByRole('progressbar')
    ).toHaveAttribute('aria-valuenow', '2')
  })
})
