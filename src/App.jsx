import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Classes from './pages/Classes'
import ClassDetail from './pages/ClassDetail'
import TopicPage from './pages/TopicPage'
import Theorie from './pages/Theorie'    // optional weiter nutzbar
import Uebungen from './pages/Uebungen'  // optional weiter nutzbar
import { ProgressProvider } from './context/ProgressContext'

export default function App() {
  return (
    <ProgressProvider>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <nav className="bg-white shadow mb-6">
          <div className="container mx-auto px-4">
            <ul className="flex space-x-6 py-4">
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/classes">Klassen</Link></li>
              <li><Link to="/theorie">Theorie (alle)</Link></li>
              <li><Link to="/uebungen">Übungen (alle)</Link></li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/:klasse" element={<ClassDetail />} />
            <Route path="/classes/:klasse/:topicId" element={<TopicPage />} />
            <Route path="/theorie" element={<Theorie />} />
            <Route path="/uebungen" element={<Uebungen />} />
          </Routes>
        </main>
      </div>
    </ProgressProvider>
  )
}
