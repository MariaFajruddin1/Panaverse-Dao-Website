'use client'
import React from 'react'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Header() {
    return (
        <Box>
            <Container maxW={1100}>
                <Flex mt={'100px'} boxShadow={'xl'} direction={{ base: 'column',md:'column', lg: 'row' }}>
                    <Box flexBasis={'70%'} pl={{lg:55,base:5}} pt={{lg:100,base:50}} >
                        <Heading size={{lg:'xl',base:'lg'}} pr={{lg:'55px',base:'5px'}}>The Program in a Nutshell: Earn While You Learn</Heading>
                        <Text pt={'10px'} pr={'65px'} fontSize={{lg:'md',base:'sm'}}>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. It resembles a cross between a corporate venture and an educational project.</Text>
                    </Box>
                    <Box boxShadow={'xl'} pos={'relative'} top={{lg:'-50px',base:'60px'}} mr={{lg:'30px',base:'auto',md:'auto',sm:'auto'}} ml={{lg:'0',base:'auto',md:'auto',sm:'auto'}}>
                        <Image
                            src='/Images/earn.jpg'
                            alt='Earn while you learn'
                            width={300}
                            height={-10}
                        />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
