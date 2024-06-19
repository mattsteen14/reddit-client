import React from 'react'
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import './App.css';
import Header from '../features/Header/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
        <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
