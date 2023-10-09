import {useState, useEffect, createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    }

    const addItem = (item, quantity) => {
        const existingItemIndex = cart.findIndex(prod => prod.id === item.id);
        if(existingItemIndex !== -1){
            const newCart = [...cart];
            newCart[existingItemIndex] = {...newCart[existingItemIndex], quantity: newCart[existingItemIndex].quantity + Number(quantity)};
            setCart(newCart);
        } else {
            setCart(prev => [...prev, {...item, quantity: Number(quantity)}]);
        }
        setTotalQuantity(prev => prev + Number(quantity));
    }

    const removeItem = (itemId) => {
        const itemToRemove = cart.find(prod => prod.id === itemId)
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        if (itemToRemove) {
            setTotalQuantity(prev => prev - itemToRemove.quantity)
        }
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
    }

    const calculateTotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const precio = Number(cart[i].precio);
            const quantity = Number(cart[i].quantity);
            if (!isNaN(precio) && !isNaN(quantity)) {
                total += precio * quantity;
            } else {
                console.error('El precio o la cantidad no es un número:', cart[i]);
            }
        }
        setTotal(total);
    }

    // Llama a calculateTotal cada vez que el carrito cambia
    useEffect(() => {
        calculateTotal();
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, calculateTotal, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
