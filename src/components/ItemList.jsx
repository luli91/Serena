//Este componente se encarga de listar los productos

import React from 'react'
import Item from './Item'
import { Flex } from "@chakra-ui/react";

const ItemList = ({ products }) => {
    return (
        <Flex wrap="wrap" justify="center" >
            {products.map(prod => 
                <Item   
                key={prod.id} 
                id={prod.id} 
                name={prod.nombre} 
                img={prod.imagen} 
                description={prod.detalle}
                price={prod.precio}
                category={prod.categoria}
                />
            )} 
        </Flex>
    );
};

export default ItemList;
