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
import { Link } from 'react-router-dom'




const NavBar = () => {
    return (
        <div className="nav">
            <Flex>
                <Box p='4'>
                    <Link to={"/"}>
                    <div>
                    <Image className="logoSerena" src={myImage} alt='logo serena' />
                    </div>
                    </Link>
                </Box>
                <Spacer />
                <Box p='8'>
                    <Menu>
                        <MenuButton className="botonMenu">
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem className ="items">
                                <Link to={`/categoria/${"verano"}`}>
                                    categoria verano
                                </Link>
                            </MenuItem>
                            <MenuItem className ="items">
                                <Link to={`/categoria/${"invierno"}`}>
                                    categoria invierno
                                </Link>
                            </MenuItem>
                            <MenuItem className ="items">
                                <Link to={`/categoria/${"primavera"}`}>
                                    categoria primavera
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box className="cartNumber" p='8'>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar
