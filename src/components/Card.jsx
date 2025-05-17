import React from 'react'

/**
 * Eine einfache Karte mit Titel und Inhalt.
 * Props:
 *  - title: String, Überschrift der Karte
 *  - children: ReactNode, Inhalt der Karte
 */
function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Card
