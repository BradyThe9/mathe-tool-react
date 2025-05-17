import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import classesData from '../data/classes.json'

export default function Classes() {
  return (
    <div className="flex">
      {/* Sidebar: Klassenliste */}
      <nav className="w-1/4 border-r border-gray-700 pr-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Klassen</h2>
        <ul className="space-y-3">
          {classesData.map(c => (
            <li key={c.class}>
              <NavLink
                to={`/classes/${c.class}`}
                className={({ isActive }) =>
                  isActive
                    ? 'block px-4 py-2 bg-gray-700 text-white rounded-lg transition'
                    : 'block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white rounded-lg transition'
                }
              >
                Klasse {c.class}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content: Outlet für ClassDetail, TopicPage oder Placeholder */}
      <section className="flex-1 pl-6">
        <Outlet />
      </section>
    </div>
  )
}
