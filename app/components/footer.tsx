'use client'
import React from 'react'
import Image from 'next/image';
import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaGithub, FaFacebook } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bgGradient: 'linear(to-l, #7928CA, #FF0080)',
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function LargeWithNewsletter() {
    return (
        <Box
            mt={'10px'}
            bg={useColorModeValue('black', 'gray.900')}
            color={useColorModeValue('white', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Image
                                src='/Images/logo.png'
                                alt='pamaverse Logo'
                                width={200}
                                height={200} />
                        </Box>
                        <Text fontSize={'md'}>
                            Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                        </Text>
                        <Stack direction={{lg:'row'}} spacing={6}>
                            <SocialButton label={'Twitter'} href={'https://twitter.com/Panaverse_edu'}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'https://www.youtube.com/@panaverse'}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'https://www.instagram.com/piaicofficial/'}>
                                <FaInstagram />
                            </SocialButton>
                            <SocialButton label={'Github'} href={'https://github.com/panaverse'}>
                                <FaGithub />
                            </SocialButton>
                            <SocialButton label={'Facebook'} href={'https://www.facebook.com/groups/panaverse'}>
                                <FaFacebook />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'/'} _hover={{ color: 'red.600' }}>Home</Link>
                        <Link href={'/about'} _hover={{ color: 'red.600' }}>About</Link>
                        <Link href={'/Course'} _hover={{ color: 'red.600' }}>Course</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={'/'} _hover={{ color: 'red.600' }}>Help Center</Link>
                        <Link href={'/'} _hover={{ color: 'red.600' }}>Terms of Service</Link>
                        <Link href={'/'} _hover={{ color: 'red.600' }}>Legal</Link>
                        <Link href={'/'} _hover={{ color: 'red.600' }}>Privacy Policy</Link>
                        <Link href={'/'} _hover={{ color: 'red.600' }}>Satus</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg={useColorModeValue('white', 'whiteAlpha.100')}
                                color={'black'}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                    color:'white',
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue('green.400', 'green.800')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'green.600',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
