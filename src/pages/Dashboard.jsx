// src/pages/Dashboard.jsx
import React from 'react'
import Card from '../components/Card'
import ProgressBar from '../components/ProgressBar'

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Fortschrittsanzeige */}
      <ProgressBar />

      {/* Beispiel-Karten */}
      <Card title="Willkommen">
        <p>Schön, dass du hier bist! Wähle links eine Kategorie aus.</p>
      </Card>

      <Card title="Letzte Aktivitäten">
        <ul className="list-disc pl-5">
          <li>Theorie-Kapitel 1 bearbeitet</li>
          <li>Übung zu Bruchrechnung gestartet</li>
          <li>Math-Tool Repository geclont</li>
        </ul>
      </Card>
    </div>
  )
}

export default Dashboard
