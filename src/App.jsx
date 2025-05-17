import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Theorie from './pages/Theorie'
import Uebungen from './pages/Uebungen'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="bg-white shadow mb-6">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 py-4">
            <li>
              <Link className="hover:text-blue-600" to="/">Dashboard</Link>
            </li>
            <li>
              <Link className="hover:text-blue-600" to="/theorie">Theorie</Link>
            </li>
            <li>
              <Link className="hover:text-blue-600" to="/uebungen">Übungen</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/theorie" element={<Theorie />} />
          <Route path="/uebungen" element={<Uebungen />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
