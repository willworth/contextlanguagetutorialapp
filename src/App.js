import React from 'react';
import './App.css';
import { LanguageProvider } from "./contexts/LanguageContext";
import Intro from './Intro';
import LangSwitch from './LangSwitch';
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
    <LanguageProvider>
    <Navbar/>
      <LangSwitch/>
    <Intro/>
    
    </LanguageProvider>
    </div>
  );
}

export default App;
