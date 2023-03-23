'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, SimpleGrid, Menu, MenuButton, MenuList, MenuItem, IconButton, Heading, Text } from '@chakra-ui/react'

export default function navBar() {
  return (
    <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      w={'full'}
      >
      <Container maxW={1400}>
        <SimpleGrid templateColumns={{ lg: 'repeat(3,1fr)', base: 'repeat(2,1fr)' }} >
          <Box ml={{lg:'0',base:'-30px'}}>
            <Image
              src='/Images/pLogo.png'
              alt='panaverse Logo'
              width={120}
              height={120} />
          </Box>
          <Flex display={{ lg: 'flex', base: 'none' }} placeItems='center' color='white' fontSize={15} gap={10} ml={600}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/Course'>Course</Link>
          </Flex>
          <Box display={{ xl: 'initial', lg: 'none', base: 'none' }}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              href={'https://www.piaic.org/'}
              color={'white'}
              bg='transparent'
              w={100}
              border='2px solid white'
              borderRadius={30}
              float='left'
              left={'48px'}
              mt={'40px'}
              _hover={{
                bgGradient: 'linear(to-l, #7928CA, #FF0080)',
                border: '0px solid white',
                boxShadow: "#d5d5d5"
              }}>
              View
            </Button>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg='transparent'
              w={100}
              border='2px solid white'
              borderRadius={30}
              float='right'
              mt={'40px'}
              href={'https://www.piaic.org/'}
              _hover={{
                bgGradient: 'linear(to-l, #7928CA, #FF0080)',
                border: '0px solid white',
                boxShadow: "#d5d5d5"
              }}>
              Apply
            </Button>
          </Box>
          <Box pt={'40px'} float='right' display={{ lg: 'none', md: 'initial', base: 'initial' }}>
            <Menu>
              <MenuButton
                float='right'
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon color='white' />}
                variant='outline'
              />
              <MenuList>
                <MenuItem>
                  <Link href='/'>Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/about'>About</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/Course'>Course</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
          <Flex pt={{ lg: '100px', base: '30px' }} pb={{ lg: '100px', base: '20px' }} px={{ lg: '40px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
            <Box flexBasis={{ lg: '50%', base: '0%' }} color='white'>
              <Heading size={{ lg: '3xl', base: 'xl' }} mr={{ lg: 'none', base: '10px' }}>Certified Web 3.0 and Metaverse Developer</Heading>
              <Text pt={'10px'} fontSize={{ lg: 'xl', base: 'md' }} mr={{ lg: 'none', base: '30px' }}>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</Text>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg='transparent'
                w={100}
                border='2px solid white'
                borderRadius={30}
                mt={'40px'}
                href={'https://www.piaic.org/'}
                _hover={{
                  bgGradient: 'linear(to-l, #7928CA, #FF0080)',
                  border: '0px solid white',
                  boxShadow: "#d5d5d5"
                }}>
                Apply
              </Button>
            </Box>
            <Box mt={{ lg: '-80px', base: '0' }} flexBasis={{ lg: '50%', base: '0' }}>
              <Image
                src='/Images/meta1.png'
                alt='metaverse image'
                width={900}
                height={900} />
            </Box>
          </Flex>
      </Container>
    </Box>
  )
}
