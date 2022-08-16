import React from 'react';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';

const App: React.FC = () =>  {
  return (
    <main className="App">
      <HomePage />
    </main>
  );
}

export default App;
