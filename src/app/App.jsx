import React from 'react'
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={}>
        <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
