// src/components/ProgressBar.jsx
import React, { useContext, useEffect, useState } from 'react'
import { ProgressContext } from '../context/ProgressContext'
import classesData from '../data/classes.json'

export default function ProgressBar() {
  const { completed } = useContext(ProgressContext)
  const [mounted, setMounted] = useState(false)

  // trigger initial mount to animate width from 0 → x%
  useEffect(() => {
    setMounted(true)
  }, [])

  // Gesamtzahl aller Übungen
  const total = classesData
    .flatMap(c => c.topics)
    .reduce((sum, t) => sum + (t.exercises?.length || 0), 0)

  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-gray-100">Fortschritt</span>
        <span className="text-sm text-gray-300">{percent}%</span>
      </div>
      <div
        className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden"
        role="progressbar"
        aria-valuenow={completed}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        {/* Farbverlauf-Füllung mit Slide-Animation on-mount */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 h-full rounded-full"
          style={{
            width: mounted ? `${percent}%` : '0%',
            transition: 'width 1s ease-out',
          }}
        />
        {/* Streifen-Overlay mit kontinuierlicher Animation */}
        <div
          className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#ffffff0a,#ffffff0a_10px,#00000000_10px,#00000000_20px)] animate-stripes"
          style={{
            width: mounted ? `${percent}%` : '0%',
            transition: 'width 1s ease-out',
          }}
        />
      </div>
      <p className="mt-1 text-xs text-gray-400">
        {completed} von {total} Übungen gelöst
      </p>
    </div>
  )
}
