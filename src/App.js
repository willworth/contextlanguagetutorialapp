import React from 'react';
import './App.css';
import { LanguageProvider } from "./contexts/LanguageContext";
import Intro from './Intro';
import LangSwitch from './LangSwitch'
function App() {
  return (
    <LanguageProvider>
    <div className="App">
      <div className="textBox">
      <h1>This is the context language tutorial app</h1>
      <LangSwitch/>
    <Intro/>

      
      </div>
    </div>
    </LanguageProvider>
  );
}

export default App;
