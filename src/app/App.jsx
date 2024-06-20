import React from 'react'
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import './App.css';
import Home from '../features/Home/Home';
import Header from '../features/Header/Header';
import Subreddits from '../features/Subreddits/Subreddits';

export default function App() {
  return (
    <body>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </body>
  );
}
