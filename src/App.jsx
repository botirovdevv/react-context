import React from 'react'
import Navbar from './components/Navbar'
import  {LanguageProvider}  from './context/LanguageProvider'
import Content from './components/Content'

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <Content/>
      </div>
    </LanguageProvider>
  )
}

export default App