import React, { Component } from 'react'
import { LanguageContext } from "./contexts/LanguageContext";


class LangSwitch extends Component {
    static contextType = LanguageContext;
    render() {
        const { language, changeLanguage } = this.context;
        return (
            <div>
                <select value={language} onChange={changeLanguage}>
            <option value='english'>English</option>
            <option value='spanish'>Español</option>
          </select>
            </div>
        )
    }
}

export default LangSwitch;