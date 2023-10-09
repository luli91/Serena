import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Center, Image, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, nombre, detalle, img, categoria, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const {addItem} = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        const item ={
            id, nombre, precio
        }

        addItem(item, quantity)
        setQuantityAdded(quantity)

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            text: `Se agregaron ${quantity} unidades al carrito`,
        });
    };

    return (
        <Center p='1rem'> 
            <Card maxW='sm' 
                    transition="all 0.2s ease-in-out" 
                    boxShadow="0 0 5px #FFC0CB" 
                    _hover={{ 
                        boxShadow: "0 0 20px #FFC0CB", 
                    }}
                >
                <CardHeader>
                    <Heading size='md' textAlign='center' fontFamily="'Bricolage Grotesque', sans-serif">{nombre}</Heading>
                </CardHeader>
                <CardBody>
                    <Image src={img} borderRadius='lg'/>
                    <Text className="DescriptionProd" size='md' textAlign='center'>{detalle}</Text>
                    <Text>Categoria: {categoria}</Text>
                    <Text className="PriceProd" size='md' textAlign='center' fontFamily="'Bricolage Grotesque', sans-serif">${precio}</Text>
                </CardBody>
                <CardFooter style={{ display: 'flex', justifyContent: 'center' }}>
                    {
                        quantityAdded > 0 ? (
                            <Button variant='solid' style={{ backgroundColor: '#D07175', color: 'white' }} ><Link to='/cart'>Continuar compra</Link></Button>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </CardFooter>
            </Card>
        </Center>
    );
};

export default ItemDetail;

