import React, { Component } from 'react'
import { LanguageContext } from "./contexts/LanguageContext";

const options = {
    english: {
        title: "This is the context language tutorial app",
      intro: "This is the intro Component",
      details: "In this app, you'll find a tutorial on using react context, which makes data available across your application, and removes the need to pass it down as a prop manually.  This makes it ideal for something like site language."
    },
    
    spanish: {
        title: "Esta es la aplicación tutorial de lenguaje contextual",
        intro: "Este es el componente de la introducíon",
      details: "En esta aplicación, encontrará un tutorial sobre cómo usar el contexto de reacción, que hace que los datos estén disponibles en su aplicación y elimina la necesidad de pasarlos como accesorio manualmente. Esto lo hace ideal para algo como el lenguaje del sitio."
    }
  };


class Intro extends Component {
    static contextType = LanguageContext;
    render() {
        const { language } = this.context;
        const { title,intro, details} = options[language];
        return (
            <div>
                <div className="textBox">
      <h1>{title}</h1>
                <p>{intro}</p>
            <p>{details}</p>
</div>
            </div>
        )
    }
}


export default Intro;