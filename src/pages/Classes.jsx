import React from 'react'
import { Link } from 'react-router-dom'
import classesData from '../data/classes.json'

export default function Classes() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Klassenübersicht</h1>
      <ul className="space-y-2">
        {classesData.map((c, idx) => (
          <li key={idx}>
            <Link
              to={`/classes/${c.class}`}
              className="text-blue-600 hover:underline"
            >
              Klasse {c.class}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
