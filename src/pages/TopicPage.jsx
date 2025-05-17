import React from 'react'
import { useParams } from 'react-router-dom'
import classesData from '../data/classes.json'
import Card from '../components/Card'
import Exercise from '../components/Exercise'

export default function TopicPage() {
  const { klasse, topicId } = useParams()
  const classEntry = classesData.find(c => c.class === klasse)
  if (!classEntry) {
    return <p>Klasse {klasse} nicht gefunden.</p>
  }
  const topic = classEntry.topics.find(t => t.id === topicId)
  if (!topic) {
    return <p>Thema nicht gefunden.</p>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Klasse {klasse} – {topic.title}
      </h1>

      <Card title="Theorie">
        <p className="mb-4">{topic.content}</p>
        {topic.examples && (
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-medium mb-2">Beispiele</h3>
            <ul className="list-decimal list-inside space-y-1">
              {topic.examples.map((ex, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{ex.question}</span> → {ex.answer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>

      <Card title="Übungen">
        {topic.exercises.map((ex, idx) => (
          <Exercise key={idx} question={ex.question} answer={ex.answer} />
        ))}
      </Card>
    </div>
  )
}
