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
import myImage from '../assets/img/LogoSerenaShoes.png'
import { Link, NavLink } from 'react-router-dom'




const NavBar = () => {
    return (
        <div className="nav">
            <Flex>
                <Box p='4'>
                    <NavLink to={"/"}>
                    <div>
                    <Image className="logoSerena" src={myImage} alt='logo serena' />
                    </div>
                    </NavLink>
                </Box>
                <Spacer />
                <Box p='8'>
                    <Menu>
                        <MenuButton className="botonMenu">
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem className ="items">
                                <NavLink to={`/categoria/verano`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                                    categoria verano
                                </NavLink>
                            </MenuItem>
                            <MenuItem className ="items">
                                <NavLink to={`/categoria/invierno`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                                    categoria invierno
                                </NavLink>
                            </MenuItem>
                            <MenuItem className ="items">
                                <NavLink to={`/categoria/primavera`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                                    categoria primavera
                                </NavLink>
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