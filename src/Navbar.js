import React, { Component } from 'react'
import { LanguageContext } from "./contexts/LanguageContext";

const options = {
    english: {
        title: "Navbar",
      details: "In this app, you'll find a tutorial on using react context, which makes data available across your application, and removes the need to pass it down as a prop manually.  This makes it ideal for something like site language.",
      flag: "🇬🇧"
    },
    
    spanish: {
        title: "Navigacion",
      details: "En esta aplicación, encontrará un tutorial sobre cómo usar el contexto de reacción, que hace que los datos estén disponibles en su aplicación y elimina la necesidad de pasarlos como accesorio manualmente. Esto lo hace ideal para algo como el lenguaje del sitio.",
      flag: "🇪🇸"
    }
  };




class Intro extends Component {
    static contextType = LanguageContext;
    render() {
        const { language } = this.context;
        const { title, details, flag} = options[language];
        return (
            <div className="navbar">
            <h1>{title}</h1>
            <p>{details}</p>
            <p>{flag}</p>
            </div>
            
        )
    }
}


export default Intro;