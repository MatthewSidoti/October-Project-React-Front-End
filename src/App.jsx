import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Vibe from './components/Vibe.jsx';
import Contact from './components/Contact.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
        <Vibe />
        <Contact />
      </main>
    </div>
  );
}

export default App;
