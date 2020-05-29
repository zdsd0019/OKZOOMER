import React from 'react';
import './partials/global.scss'
import logo from './logo.svg';
import './App.css';
import './component/header/header.scss';
import Header from '../src/component/header/header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
