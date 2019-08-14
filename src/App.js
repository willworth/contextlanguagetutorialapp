import React from 'react';
import './App.css';
import { LanguageProvider } from "./contexts/LanguageContext";
import Intro from './Intro';
import LangSwitch from './LangSwitch'
function App() {
  return (
    <LanguageProvider>
    <div className="App">
      <LangSwitch/>
    <Intro/>
    </div>
    </LanguageProvider>
  );
}

export default App;
