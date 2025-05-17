// src/components/__tests__/Exercise.test.jsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Exercise from '../Exercise'

describe('Exercise-Komponente', () => {
  const question = '2 + 3 ='
  const answer = '5'

  it('rendert Frage, Eingabefeld und Prüfen-Button', () => {
    render(<Exercise question={question} answer={answer} />)
    // Frage sichtbar
    expect(screen.getByText(question)).toBeInTheDocument()
    // Eingabefeld vorhanden
    expect(screen.getByPlaceholderText('Deine Antwort')).toBeInTheDocument()
    // Button vorhanden
    expect(screen.getByRole('button', { name: /prüfen/i })).toBeInTheDocument()
  })

  it('zeigt Erfolg bei korrekter Antwort', async () => {
    render(<Exercise question={question} answer={answer} />)
    const input = screen.getByPlaceholderText('Deine Antwort')
    // richtige Antwort eingeben
    await userEvent.type(input, answer)
    await userEvent.click(screen.getByRole('button', { name: /prüfen/i }))
    // Erfolgsmeldung prüfen
    expect(screen.getByText('✅ Richtig!')).toBeInTheDocument()
  })

  it('zeigt Fehler bei falscher Antwort', async () => {
    render(<Exercise question={question} answer={answer} />)
    const input = screen.getByPlaceholderText('Deine Antwort')
    // falsche Antwort eingeben
    await userEvent.type(input, '4')
    await userEvent.click(screen.getByRole('button', { name: /prüfen/i }))
    // Fehlermeldung mit korrekter Lösung prüfen
    expect(
      screen.getByText(`❌ Falsch. Die richtige Antwort ist ${answer}.`)
    ).toBeInTheDocument()
  })
})
