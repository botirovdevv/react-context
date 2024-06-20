import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { cart, removeItemFromCart, clearCart } = useContext(CartContext)
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            {cart.length > 0 && (
                <div>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            )}
        </div>
    )
}

export default Cart