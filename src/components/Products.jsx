import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Products = () => {
    const { addToCart } = useContext(CartContext)

    const products = [
        { id: 1, name: 'Product 1', price: '10' },
        { id: 2, name: 'Product 2', price: '20' },
        { id: 3, name: 'Product 3', price: '30' },
    ];
  return (
    <div>
        {
            products.map(item => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <span>{item.price}</span>
                    <button className='btn' onClick={() =>addToCart(item)}>add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products