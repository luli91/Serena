import React from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Image } from '@chakra-ui/react'
import myImage from '../assets/img/logoSerena.png'




const NavBar = () => {
    return (
        <div className="nav">
            <Flex>
                <Box p='4'>
                    <div>
                    <Image className="logoSerena" src={myImage} alt='logo serena' />
                    </div>
                </Box>
                <Spacer />
                <Box p='8'>
                    <Menu>
                        <MenuButton className="botonMenu">
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem className ="items">Jeans</MenuItem>
                            <MenuItem className ="items">Remeras, camisas y tops</MenuItem>
                            <MenuItem className ="items">Vestidos</MenuItem>
                            <MenuItem className ="items">Faldas y shorts</MenuItem>
                            <MenuItem className ="items">Sueters y Buzos</MenuItem>
                            <MenuItem className ="items">Camperas</MenuItem>
                            <MenuItem className ="items">Pantalones</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box className="cartNumber" p='8'>
                    <CartWidget />
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar
