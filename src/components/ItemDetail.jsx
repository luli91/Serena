import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Center, Image, Button } from "@chakra-ui/react";
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({productos }) => {

    const { d } = useParams ()
    const filteredProducts = productos.filter((producto) => producto.id == d)
    return (
    <div>
        {filteredProducts.map((p)=>{
        // {productos.map((p)=>{
            return (
                <div key={p.id}>
                    <Center p='1rem'>

                        <Card>
                            <CardHeader>
                                <Heading size='md'>{p.nombre}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Image src={p.img} borderRadius='lg'/>
                                <Text>{p.descripcion}</Text>
                                <Text>{p.categoria}</Text>
                            </CardBody>
                            <CardFooter>
                                <ItemCount stock={p.stock} />
                                <Button bg="#B76E79" color="white">
                                        Comprar
                                    </Button>
                            </CardFooter>
                        </Card>
                    </Center>
                </div>
            )
        })}
    </div>
    )
}

export default React.memo(ItemDetail);
