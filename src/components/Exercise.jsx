import React, { useState, useContext } from 'react'
import { ProgressContext } from '../context/ProgressContext'

/**
 * Interaktive Übung mit Dark-Mode-Styling und Animationen.
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
    <div className="bg-gray-800 rounded-2xl shadow-xl shadow-indigo-900 p-6 mb-6">
      <p className="mb-3 font-medium text-gray-100">{question}</p>
      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          placeholder="Deine Antwort"
          className="flex-1 bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
        <button
          onClick={checkAnswer}
          className="bg-primary hover:bg-primary-hover text-white rounded px-5 py-2 transition transform hover:-translate-y-1"
        >
          Prüfen
        </button>
      </div>
      {feedback && (
        <p className="mt-3 text-gray-200 transition-opacity animate-fade-in">
          {feedback}
        </p>
      )}
    </div>
  )
}

export default Exercise
