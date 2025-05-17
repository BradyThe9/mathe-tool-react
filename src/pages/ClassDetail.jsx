import React from 'react'
import { useParams, Link } from 'react-router-dom'
import classesData from '../data/classes.json'

export default function ClassDetail() {
  const { klasse } = useParams()
  const classEntry = classesData.find(c => c.class === klasse)
  if (!classEntry) {
    return <p>Klasse {klasse} nicht gefunden.</p>
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Klasse {klasse}</h1>
      <ul className="space-y-2">
        {classEntry.topics.map(topic => (
          <li key={topic.id}>
            <Link
              to={`/classes/${klasse}/${topic.id}`}
              className="text-blue-600 hover:underline"
            >
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
