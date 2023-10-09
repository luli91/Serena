import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ id, nombre, precio, quantity }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <h2>{nombre}</h2>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${precio}</p>
            <button onClick={handleRemove}><span className="material-icons">delete</span></button>
        </div>
    );
};

export default CartItem;
