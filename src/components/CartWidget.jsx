import { Divider, Flex, Box } from '@chakra-ui/react'
import React from 'react'


const CartWidget = () => {
    return (
        <div>
            <Flex>
                <Box>
                <span className="material-symbols-outlined">add_shopping_cart</span>
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
