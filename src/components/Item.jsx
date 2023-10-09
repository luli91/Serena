import React from 'react'
import { Card, Image, Stack, Text, CardBody, Button, ButtonGroup, CardFooter, Heading, Box } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Item = ({img, name, id}) => {
    return (
        <Box 
            _hover={{ 
                transform: "all 0.2s ease-in-out", 
                boxShadow: "0 0 20px #FFC0CB", // Sombreado florecente rosa
            }}
            margin="24px"
            transition="all 0.2s ease-in-out" // Transición suave
            boxShadow="0 0 5px #FFC0CB" // Sombreado inicial
        >
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={img}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3' alignItems='center'>
                        <Heading size='md' textAlign='center'>{name}</Heading>
                        <Text>
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup justifyContent='center'>
                        <Button as={Link} to={`/item/${id}`} colorScheme='pink'>Detalle</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Box>
    )
}

export default Item;
