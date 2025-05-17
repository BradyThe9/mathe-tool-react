import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import classesData from '../data/classes.json'

export default function ClassDetail() {
  const { klasse } = useParams()
  const classEntry = classesData.find(c => c.class === klasse)

  if (!classEntry) {
    return <p className="text-gray-200">Klasse {klasse} nicht gefunden.</p>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-100">
        Klasse {klasse}
      </h1>
      <ul className="space-y-3">
        {classEntry.topics.map(topic => (
          <li key={topic.id}>
            <NavLink
              to={`/classes/${klasse}/${topic.id}`}
              className={({ isActive }) =>
                isActive
                  ? 'block px-4 py-2 bg-gray-700 text-white rounded-lg transition'
                  : 'block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white rounded-lg transition'
              }
            >
              {topic.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
