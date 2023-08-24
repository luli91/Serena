import React from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'




const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box p='4'>
                    <div className="logo">
                        <h3>Serena</h3>
                    </div>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Jeans</MenuItem>
                            <MenuItem>Remeras, camisas y tops</MenuItem>
                            <MenuItem>Vestidos</MenuItem>
                            <MenuItem>Faldas y shorts</MenuItem>
                            <MenuItem>Sueters y Buzos</MenuItem>
                            <MenuItem>Camperas</MenuItem>
                            <MenuItem>Pantalones</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <CartWidget />
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar
