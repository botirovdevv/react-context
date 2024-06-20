import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { LanguageProvider } from './context/LanguageProvider';
import Content from './components/Content';
import { CartProvider } from './context/CartContext';
import Products from './components/Products';
import Cart from './components/Cart';
import './styles/index.css';

const App = () => {
  const [isAdmin, setAdmin] = useState(false);
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const secretCode = 'react-context';
    if (code === secretCode) {
      setAdmin(true);
    } else {
      alert('Noto‘g‘ri kod, iltimos qayta urinib ko‘ring!');
    }
  };

  return (
    <div>
      {isAdmin ? (
        <div>
          <LanguageProvider>
            <CartProvider>
              <div>
                <Navbar />
                <Content />
                <Products />
                <Cart />
              </div>
            </CartProvider>
          </LanguageProvider>
        </div>
      ) : (
        <form className='admin-form' onSubmit={handleSubmit}>
          <div>
            <label>Kirish Kodingiz:</label>
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className='input'
            />
          </div>
          <button className='btn' type="submit">Kirish</button>
        </form>
      )}
    </div>
  );
};

export default App;
