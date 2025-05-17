import React from 'react'
import exercises from '../data/exercises.json'
import Exercise from '../components/Exercise'

function Uebungen() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Übungen</h1>

      {exercises.map((ex, idx) => (
        <Exercise key={idx} question={ex.question} answer={ex.answer} />
      ))}
    </div>
  )
}

export default Uebungen
