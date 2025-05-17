import React from 'react'

/**
 * Eine einfache Karte mit Titel und Inhalt im Dark-Mode-Stil.
 */
function Card({ title, children }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl shadow-indigo-900 p-6 mb-6 transition-transform hover:-translate-y-1">
      <h2 className="text-2xl font-semibold mb-3 text-gray-100">
        {title}
      </h2>
      <div className="text-gray-200">{children}</div>
    </div>
  )
}

export default Card
