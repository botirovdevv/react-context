import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageProvider'

const Navbar = () => {
    const { language, changeLanguage } = useContext(LanguageContext)

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('uz')}>O'zbek</button>
      <button onClick={() => changeLanguage('ru')}>Rus</button>
    </div>
  )
}

export default Navbar