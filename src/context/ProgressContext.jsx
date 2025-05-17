// src/context/ProgressContext.jsx
import React, { createContext, useState, useEffect } from 'react'

export const ProgressContext = createContext()

export function ProgressProvider({ children }) {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('completedCount')
    return saved ? JSON.parse(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem('completedCount', JSON.stringify(completed))
  }, [completed])

  return (
    <ProgressContext.Provider value={{ completed, setCompleted }}>
      {children}
    </ProgressContext.Provider>
  )
}
