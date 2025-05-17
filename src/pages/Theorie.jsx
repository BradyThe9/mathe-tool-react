// src/pages/Theorie.jsx
import React from 'react'
import theoryData from '../data/theory.json'
import Card from '../components/Card'

export default function Theorie() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-100">Theorie</h1>

      {theoryData.map((chapter, idx) => (
        <Card key={idx} title={chapter.title}>
          <p className="mb-4 text-gray-200">{chapter.content}</p>
          {chapter.examples && (
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="font-medium mb-2 text-gray-100">Beispiele</h3>
              <ul className="list-decimal list-inside space-y-1 text-gray-200">
                {chapter.examples.map((ex, exIdx) => (
                  <li key={exIdx}>
                    <span className="font-semibold text-gray-100">
                      {ex.question}
                    </span>{' '}
                    → {ex.answer}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}
