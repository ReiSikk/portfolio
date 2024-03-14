import React from 'react'
import { useTranslation } from 'react-i18next'


const languages = [
    {
      code: 'en',
      lang: "English"
    },
    {
      code: 'ee',
      lang: "Eesti"
    }
  ]

  
  
  const LanguageSelector = () =>  {
    const {i18n} = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }
    return (
      <div>
        <select className="language-select" onChange={changeLanguage}>
          {languages.map((language) => {
            return (
              <option className={language.code === i18n.language ? "selected" : ""} key={language.code} value={language.code}>{language.lang}</option>
            )
          })}
        </select>

      </div>
    )
  }
  
  export default LanguageSelector