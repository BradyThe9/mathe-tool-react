import React, { useContext } from 'react'
import { ProgressContext } from '../context/ProgressContext'
import classesData from '../data/classes.json'

export default function ProgressBar() {
  const { completed } = useContext(ProgressContext)
  // Gesamtzahl aller Übungen
  const total = classesData
    .flatMap(c => c.topics)
    .reduce((sum, t) => sum + (t.exercises?.length || 0), 0)
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium text-gray-100 mb-2">
        Fortschritt: {completed} / {total}
      </h2>
      <div
        className="w-full bg-gray-700 rounded-full h-4 overflow-hidden"
        role="progressbar"
        aria-valuenow={completed}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div
          className="bg-primary h-4 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
