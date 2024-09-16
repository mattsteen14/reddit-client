import React from 'react'
import './App.css';
import { Home } from '../features/Home/Home';
import { Header } from '../features/Header/Header';
import { Subreddits } from '../features/Subreddits/Subreddits';
import View from '../features/View/View';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <View />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </div>
  );
}
