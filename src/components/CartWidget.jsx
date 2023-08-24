import { Divider, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import myImage from '../assets/img/cart.png'

const CartWidget = () => {
    return (
        <div>
            <Flex>
                <Box>
                <Image className="carrito" src={myImage} alt='carrito de compras' />
                </Box>
                <Divider />
                <Box>
                    <p>6</p>
                </Box>
            </Flex>
        </div>
    )
}

export default CartWidget
