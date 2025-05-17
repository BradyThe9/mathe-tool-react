// src/components/Exercise.jsx
import React, { useState, useContext } from 'react'
import { ProgressContext } from '../context/ProgressContext'

/**
 * Props:
 *  - question: String, die Aufgabenstellung
 *  - answer:   String, die korrekte Antwort
 */
function Exercise({ question, answer }) {
  const { completed, setCompleted } = useContext(ProgressContext)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [answeredCorrect, setAnsweredCorrect] = useState(false)

  const checkAnswer = () => {
    if (userAnswer.trim() === answer) {
      setFeedback('✅ Richtig!')
      if (!answeredCorrect) {
        setCompleted(completed + 1)
        setAnsweredCorrect(true)
      }
    } else {
      setFeedback(`❌ Falsch. Die richtige Antwort ist ${answer}.`)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow p-4 mb-4">
      <p className="mb-2 font-medium">{question}</p>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
          placeholder="Deine Antwort"
        />
        <button
          onClick={checkAnswer}
          className="bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-700"
        >
          Prüfen
        </button>
      </div>
      {feedback && <p className="mt-2">{feedback}</p>}
    </div>
  )
}

export default Exercise
