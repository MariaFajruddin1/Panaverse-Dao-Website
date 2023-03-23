'use client'
import { Box, Button, Container, Flex, SimpleGrid, Menu, MenuButton, MenuList, MenuItem, IconButton, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'

export default function sectionOne() {
    return (
        <Box>
                <Container maxW={1100} bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} backgroundPosition={'center center'} w={'full'} h={{ lg: '60vh' }}>
                    <Flex mt={'150px'} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis={{ lg: '50%', base: '100%' }}>
                            <Image
                                src='/Images/metaverse.png'
                                alt='Earn while you learn'
                                width={500}
                                height={500}
                            />
                        </Box>
                        <Box ml={{ lg: '60px', base: '10px' }} mt={{ lg: '50px', base: '20px' }} flexBasis={{ lg: '50%', base: '0' }}>
                            <Heading size={{ lg: 'xl', base: 'md' }} color='white'>Program of Studies</Heading>
                            <Text color='white' pr={{ lg: 17, base: 5 }}>This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</Text>
                            <Button
                                as={'a'}
                                mb={{ lg: 'none', base: '15px' }}
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'white'}
                                bg='transparent'
                                w={100}
                                border='2px solid white'
                                borderRadius={30}
                                mt={'20px'}
                                href={'https://www.piaic.org/'}
                                _hover={{
                                    bgGradient: 'linear(to-l, #7928CA, #FF0080)',
                                    border: '0px solid white',
                                    boxShadow: "#d5d5d5"
                                }}>
                                Apply
                            </Button>
                        </Box>
                    </Flex>
                </Container>
        </Box>
    )
}
