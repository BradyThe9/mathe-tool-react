// src/components/__tests__/Card.test.jsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../Card'

describe('Card-Komponente', () => {
  it('rendert Titel und Kinder korrekt', () => {
    render(
      <Card title="Test-Titel">
        <p>Inhalt</p>
      </Card>
    )
    // prüft, dass der Titel angezeigt wird
    expect(screen.getByText('Test-Titel')).toBeInTheDocument()
    // prüft, dass der Kinder-Inhalt angezeigt wird
    expect(screen.getByText('Inhalt')).toBeInTheDocument()
  })
})
