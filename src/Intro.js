import React, { Component } from 'react'
import { LanguageContext } from "./contexts/LanguageContext";
class Intro extends Component {
    static contextType = LanguageContext;
    render() {
        return (
            <div>
                <p>this is the intro Component</p>

                <p>In this app, you'll find a tutorial on using react context, which makes data available across your application, and removes the need to pass it down as a prop manually.  This makes it ideal for something like site language.</p>
            </div>
        )
    }
}


export default Intro;