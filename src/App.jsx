import React from 'react'
import Navbar from './components/Navbar'
import { LanguageProvider } from './context/LanguageProvider'
import Content from './components/Content'
import { CartProvider } from './context/CartContext'
import Products from './components/Products'
import Cart from './components/Cart'

const App = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div>
          <Navbar />
          <Content />
          <Products/>
          <Cart/>
        </div>

      </CartProvider>
    </LanguageProvider>
  )
}

export default App