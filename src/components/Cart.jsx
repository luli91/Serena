import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'; 
import Form from './Form'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)
    const [showForm, setShowForm] = useState(false)

    if(totalQuantity === 0) {
        return(
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '30px', textAlign: 'center' }}>
                <h1 style={{ fontWeight: 'bold', fontSize: '50px', fontFamily: "'Bricolage Grotesque', sans-serif" }}>No hay productos en el carrito</h1>
                <Link to="/" style={{ fontWeight: 'bold', fontSize: '30px' }}>Pagina principal</Link>
            </div>
        )
    }

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '20px' }}> 
            <h1 style={{ fontSize: '30px', fontFamily: "'Bricolage Grotesque', sans-serif" }}>Carrito</h1>
            {cart.map(p => 
                <CartItem key={p.id} {...p}/>
            )}
            <h2 style={{ fontWeight: 'bold', fontSize: '25px', fontFamily: "'Bricolage Grotesque', sans-serif" }}>Total: {total}</h2>
            <button onClick={() => clearCart()} style={{ marginTop: '10px' }}>Eliminar carrito</button>
            {showForm ? <Form /> : 
                <button style={{ backgroundColor: 'pink', padding: '10px', marginTop: '10px', textDecoration: 'none', color: 'white' }} onClick={() => setShowForm(true)}>Comprar</button>
            }
        </div>    
    )
}

export default Cart;


