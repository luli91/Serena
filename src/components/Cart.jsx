import React, { useEffect } from 'react'
import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'; 

const Cart = () => {
    const {cart, clearCart, totalQuantity, total, calculateTotal} = useContext(CartContext)

    useEffect(() => {
        calculateTotal();
    }, []);

    if(totalQuantity === 0) {
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to="/">Pagina principal</Link>
            </div>
        )
    }

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
            <h1>Carrito</h1>
            {cart.map(p => 
                <CartItem key={p.id} {...p}/>
            )}
            <h3 style={{ marginTop: '20px' }}>Total: ${total}</h3>
            <button onClick={() => clearCart()} style={{ marginTop: '10px' }}>Eliminar carrito</button>
            <Link to='/checkout' style={{ backgroundColor: 'pink', padding: '10px', marginTop: '10px', textDecoration: 'none', color: 'white' }}>Comprar</Link>
            {cart.length > 0 && <Form />}
        </div>   
    )
}

export default Cart;

