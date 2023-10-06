import {useState, createContext} from 'react'
//para que toda mi aplicacion pueda acceder a mi contexto 
//creo el context 
export const CartContext = createContext ({
    cart: []
})

//el proveedor es el que va a ser el encargado de llevar archivos, estados y variables y va a ser vista por children
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
            setTotalQuantity(prev => prev + quantity)
            calculateTotal(); // Llama a calculateTotal después de agregar un artículo
        } else {
            console.error('el producto ya fue agregado')
        }
    }
    const removeItem = (itemId) => {
        const itemToRemove = cart.find(prod => prod.id === itemId)
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        if (itemToRemove) {
            setTotalQuantity(prev => prev - itemToRemove.quantity)
            calculateTotal() 
        }
    }
    
    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
    }
    const isInCart =(itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }
    const calculateTotal = () => { // función para calcular el total
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity;
        }
        setTotal(total);
    }

    return (
        // el proveedor se carga de estos valores (value) y se los pasa a children
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, calculateTotal}}>
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider
