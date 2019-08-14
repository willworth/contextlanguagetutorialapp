import React from 'react';
import './App.css';
import { LanguageProvider } from "./contexts/LanguageContext";
import Intro from './Intro';
function App() {
  return (
    <LanguageProvider>
    <div className="App">
      <div className="textBox">
      <h1>This is the context language tutorial app</h1>
    <Intro/>

      
      </div>
    </div>
    </LanguageProvider>
  );
}

export default App;
