import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Classes from './pages/Classes'
import ClassDetail from './pages/ClassDetail'
import TopicPage from './pages/TopicPage'
import Theorie from './pages/Theorie'
import Uebungen from './pages/Uebungen'
import { ProgressProvider } from './context/ProgressContext'

export default function App() {
  return (
    <ProgressProvider>
      <div className="min-h-screen bg-gradient-dark text-gray-100">
        <nav className="bg-gray-900/[0.6] backdrop-blur-md shadow-lg mb-6">
          <div className="container mx-auto px-4">
            <ul className="flex space-x-6 py-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary-hover transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/classes"
                  className="text-gray-300 hover:text-primary-hover transition-colors"
                >
                  Klassen
                </Link>
              </li>
              <li>
                <Link
                  to="/theorie"
                  className="text-gray-300 hover:text-primary-hover transition-colors"
                >
                  Theorie (alle)
                </Link>
              </li>
              <li>
                <Link
                  to="/uebungen"
                  className="text-gray-300 hover:text-primary-hover transition-colors"
                >
                  Übungen (alle)
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/:klasse" element={<ClassDetail />} />
            <Route
              path="/classes/:klasse/:topicId"
              element={<TopicPage />}
            />
            <Route path="/theorie" element={<Theorie />} />
            <Route path="/uebungen" element={<Uebungen />} />
          </Routes>
        </main>
      </div>
    </ProgressProvider>
  )
}
