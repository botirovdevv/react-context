import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart(prevCart => {
            const itemInCart = prevCart.find(cartItem => cartItem.id === item.id);
            if (itemInCart) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }   
        });
    };
    const removeItemFromCart = (itemId) => {
        setCart(prevCart => {
            const itemInCart = prevCart.find(cartItem => cartItem.id === itemId);
            if (itemInCart.quantity > 1) {
                return prevCart.map(cartItem =>
                    cartItem.id === itemId
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            } else {
                return prevCart.filter(cartItem => cartItem.id !== itemId);
            }
        });
    };

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItemFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
};

