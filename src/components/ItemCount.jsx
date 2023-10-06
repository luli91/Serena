import { useState } from "react" 
import { Button, Stack, Box } from '@chakra-ui/react'


const ItemCount = ({stock, initial, onAdd}) => {

    const  [quantity, setQuantity] = useState(initial)
//la suma o resta de un contador se p0uede hacer directamente con  onclick y el set contador como en el caso de la suma (linea21) pero tmb se puede realizar de la manera que esta plasmado en la resta, onclick restar y la funcion que está en la (linea 11). En el caso que quiera poner un limite hago un condicion.
// boton para reiniciar <button onClick={()=> setContador(0)}>reiniciar</button>
const incrementar = () => {
    if (quantity < stock) {
        setQuantity(quantity + 1)
    }
}

const decrementar = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1)
    }
}

    return (
        <>
            <Stack direction={['column','row']} spacing='24px'>
                <Box w='40px' h='40px'>
                    <Button size='xs' onClick={decrementar}>-</Button>
                </Box>
                <Box w='40px' h='40px'>
                    <p>{quantity}</p>
                </Box>
                <Box w='40px' h='40px'>
                    <Button size='xs' onClick={incrementar}>+</Button>
                </Box>
                <Box>
                    <Button bg="#B76E79" color="white" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</Button>  {/*disabled es para que no se pase del stock que tengo*/}
                </Box>
            </Stack>
        </>
    )
}

export default ItemCount
