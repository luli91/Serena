//Este componente se encarga de listar los productos

import React from 'react'
import Item from './Item'
import { Flex } from "@chakra-ui/react";


// const ItemList = ({productos}) => {
//     //console.log(product)
//     return (
        
//     <div >
//         { 
//             productos.map((p)=>{
//                 return(
//                     <>
//                     <Item  producto={p} key={p.id} />
//                     </>
//             )
//         })
//         }
//     </div>
//     )
// }
const ItemList = ({ products }) => {
    return (
        <>
            <Flex wrap="wrap" justify="center" >
        {products.map(prod => <Item   key={prod.id} 
                    id={prod.id} 
                    name={prod.name} 
                    img={prod.img} 
                    description={prod.description} // Pasando 'description' como prop
                    price={prod.price} // Pasando 'price' como prop
                />
            )} 
        
    </Flex>
        </>
    );
};
export default ItemList
