import React from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading, Box } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    console.log(producto)
    return (
        <Box 
        _hover={{ 
            transform: "scale(1.05)", 
            transition: "all 0.2s ease-in-out" 
        }}
        margin="24px"
    >
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={producto.img}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{producto.nombre}</Heading>
                    <Text>
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='pink'>
                        <Link to={`/item/${producto.id}`}>Detalle</Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </Box>
    )
}

export default Item
