//muestra los porductos que agregue al carrito
import React from 'react';

const CartItem = ({ id, name, price, quantity }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <h2>{name}</h2>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price}</p>
            <button><span className="material-icons">delete</span></button>
        </div>
    )
}
export default CartItem;
