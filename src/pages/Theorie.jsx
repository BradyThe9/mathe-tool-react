import React from 'react'
// JSON-Daten importieren
import theoryData from '../data/theory.json'

function Theorie() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Theorie</h1>

      {theoryData.map((chapter, idx) => (
        <article key={idx} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{chapter.title}</h2>
          <p className="mb-4">{chapter.content}</p>

          {chapter.examples && (
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-medium mb-2">Beispiele</h3>
              <ul className="list-decimal list-inside space-y-1">
                {chapter.examples.map((ex, exIdx) => (
                  <li key={exIdx}>
                    <span className="font-semibold">{ex.question}</span> → {ex.answer}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      ))}
    </div>
  )
}

export default Theorie
