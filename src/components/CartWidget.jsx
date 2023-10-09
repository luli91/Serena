import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    console.log(totalQuantity)
    return (
        <div>
            <span className="material-icons">shopping_cart</span>
            {totalQuantity > 0 && (
                <p>{totalQuantity}</p>
            )}
        </div>
    );
};

export default CartWidget;
