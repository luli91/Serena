import { useState } from "react" 
import { Button, Stack, Box } from '@chakra-ui/react'


const ItemCount = () => {


    const  [contador, setContador] = useState(0)
//la suma o resta de un contador se p0uede hacer directamente con  onclick y el set contador como en el caso de la suma (linea21) pero tmb se puede realizar de la manera que esta plasmado en la resta, onclick restar y la funcion que está en la (linea 11). En el caso que quiera poner un limite hago un condicion.
// boton para reiniciar <button onClick={()=> setContador(0)}>reiniciar</button>

    return (
        <>
            <Stack direction={['column','row']} spacing='24px'>
                <Box w='40px' h='40px'>
                    <Button size='xs' onClick={()=> setContador(contador + 1)}>+</Button>
                </Box>
                <Box w='40px' h='40px'>
                    <p>{contador}</p>
                </Box>
                <Box w='40px' h='40px'>
                    <Button size='xs' onClick={()=> setContador(contador - 1)}>-</Button>
                </Box>
            </Stack>
        </>
    )
}

export default ItemCount
