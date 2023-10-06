import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Box, Divider, Flex } from '@chakra-ui/react';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    console.log(totalQuantity); 
    return (
        <Flex>
                <Box>
                <span className="material-symbols-outlined">add_shopping_cart</span>
                </Box>
                <Divider />
                <Box>
                {totalQuantity > 0 && (
                    <p>{totalQuantity}</p>  
                )}
                </Box>
        </Flex>
    )
}

export default CartWidget;

{/*  */}