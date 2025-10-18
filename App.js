// ============================
// Define App Routes
// ============================
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Import pages
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'
import NavBar from './component/NavBar'

function App() {
  return (
    <div>
      {/* Common navbar visible on all pages */}
      <NavBar />

      {/* Define routes for the app */}
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  )
}

export default App

/**Routes = container for all app paths.

Route path="/users" = when we visit /users, show Users component.

Route path="/user/:id" = dynamic route (like /user/1, /user/2).

NavBar = visible on all pages. */