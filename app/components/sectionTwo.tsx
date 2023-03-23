'use client'
import React from 'react'
import { Box, Container, Flex, Heading, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'

export default function sectionTwo() {
    return (
        <Box>
            <Container maxW={1400}>
                <Flex mt={'100px'} display={{lg:'flex',base:'reverse'}}>
                    <Box ml={{lg:'150px',base:'40px'}} mt={'80px'} flexBasis={'50%'} pt={'50px'} pr={{lg:'20px',base:'40px'}}>
                        <Heading size='xl' color='black'>Live Class From Anywhere Via Zoom</Heading>
                        <br />
                        <Text color='black' fontSize={'lg'}>Helping employees gain skills and providing career development often take a back seat to business priorities but workplace. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</Text>
                        <Button
                            as={'a'}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'black'}
                            bg='transparent'
                            w={100}
                            border='2px solid black'
                            borderRadius={30}
                            mt={'40px'}
                            href={'https://www.piaic.org/'}
                            _hover={{
                                bgGradient: 'linear(to-l, #7928CA, #FF0080)',
                                border: '0px solid white',
                                boxShadow: "#d5d5d5",
                                color:'white'
                            }}>
                            Apply
                        </Button>
                    </Box>
                    <Box flexBasis={'50%'} pr={{lg:'50px',base:'20px'}} pl={{lg:'0',base:'40px'}}>
                        <Image
                            src='/Images/zoom.png'
                            alt='Earn while you learn'
                            width={700}
                            height={700}
                        />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
