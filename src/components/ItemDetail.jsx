import React, {useContext, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Center, Image, Button } from "@chakra-ui/react";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({id, name, description, img, category, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState (0)
    const {addItem} = useContext(CartContext);


    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item ={
            id, name, price
        }

        addItem(item, quantity)

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            text: `Se agregaron ${quantity} unidades al carrito`,
        })
    }

    // const { d } = useParams ()
    // const filteredProducts = productos.filter((producto) => producto.id == d)
    return (
    <>
        {/* {filteredProducts.map((p)=>{
        {productos.map((p)=>{ 
            return (
                <div key={p.id}>*/}
                    <Center p='1rem'> 

                    <Card maxW='sm' 
                            transition="all 0.2s ease-in-out" // Transición suave
                            boxShadow="0 0 5px #FFC0CB" // Sombreado menos notorio
                            _hover={{ 
                                boxShadow: "0 0 20px #FFC0CB", // Sombreado más notorio
                            }}
                        >
                            <CardHeader>
                                <Heading size='md' textAlign='center' fontFamily="'Bricolage Grotesque', sans-serif">{name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Image src={img} borderRadius='lg'/>
                                <Text className="DescriptionProd" size='md' textAlign='center'>{description}</Text>
                                <Text>Categoria: {category}</Text>
                                <Text className="PriceProd" size='md' textAlign='center'fontFamily="'Bricolage Grotesque', sans-serif">${price}</Text>
                            </CardBody>
                            <CardFooter  style={{ display: 'flex', justifyContent: 'center' }}>
                                {
                                    quantityAdded > 0 ? (
                                        <Button variant='solid' style={{ backgroundColor: '#D07175', color: 'white' }} ><Link to='/cart'>Comprar</Link></Button>
                                    ) : (
                                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => handleOnAdd(quantity)} />
                                    )
                                    }
                            </CardFooter>
                        </Card>
                    </Center>
                </>
            )
//         })}
//     </div>
//     )
// }
}
export default React.memo(ItemDetail);
