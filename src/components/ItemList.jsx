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
const ItemList = ({ productos }) => {
    return (
        <Flex wrap="wrap" justify="center" >
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </Flex>
    );
};
export default ItemList
