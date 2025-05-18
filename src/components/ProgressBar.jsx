// src/components/ProgressBar.jsx
import React, { useContext } from 'react'
import { ProgressContext } from '../context/ProgressContext'
import classesData from '../data/classes.json'

export default function ProgressBar() {
  const { completed } = useContext(ProgressContext)

  // Gesamtzahl aller Übungen über alle Klassen
  const total = classesData
    .flatMap(c => c.topics)
    .reduce((sum, t) => sum + (t.exercises?.length || 0), 0)

  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-gray-100">
          Fortschritt
        </span>
        <span className="text-sm text-gray-300">
          {percent}%
        </span>
      </div>
      <div
        className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden"
        role="progressbar"
        aria-valuenow={completed}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 h-full rounded-full"
          style={{ width: `${percent}%`, transition: 'width 0.6s ease' }}
        />
        {/* leichte diagonale Streifen über das Gradient */}
        <div
          className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#ffffff0a,#ffffff0a_10px,#00000000_10px,#00000000_20px)]"
          style={{ width: `${percent}%`, transition: 'width 0.6s ease' }}
        />
      </div>
      <p className="mt-1 text-xs text-gray-400">
        {completed} von {total} Übungen gelöst
      </p>
    </div>
  )
}
