// src/components/ProgressBar.jsx
import React, { useContext } from 'react'
import { ProgressContext } from '../context/ProgressContext'
import exercises from '../data/exercises.json'

export default function ProgressBar() {
  const { completed } = useContext(ProgressContext)
  const total = exercises.length
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-2">
        Fortschritt: {completed} / {total}
      </h2>
      <div
        className="w-full bg-gray-200 rounded-full h-4"
        role="progressbar"
        aria-valuenow={completed}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
