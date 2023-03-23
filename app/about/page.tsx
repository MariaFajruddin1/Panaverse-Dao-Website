'use client'
import { Box, Image as chakraImage, Button, Container, Flex, SimpleGrid, Menu, MenuButton, MenuList, MenuItem, IconButton, Heading, Text,Stack, Center, useColorModeValue, Avatar} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import Footer from '../components/footer'

export default function page() {
  return (
    <>
      <Box bgGradient='linear(to-l, #7928CA, #FF0080)'>
        <Container maxW={1400}>
          <SimpleGrid templateColumns={{ lg: 'repeat(3,1fr)', base: 'repeat(2,1fr)' }}>
            <Box>
              <Image
                src='/Images/pLogo.png'
                alt='panaverse Logo'
                width={120}
                height={120} />
            </Box>
            <Flex display={{ lg: 'flex', base: 'none' }} placeItems='center' color='white' fontSize={15} gap={10} pl={600}>
              <Link href='/'>Home</Link>
              <Link href='/about'>About</Link>
              <Link href='/Course'>Course</Link>
            </Flex>
            <Box display={{ lg: 'initial', base: 'none' }}>
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
                  border:'0px solid white',
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
                  border:'0px solid white',
                boxShadow: "#d5d5d5"
                }}>
                Apply
              </Button>
            </Box>
            <Box pt={'40px'} float='right' display={{ lg: 'none', base: 'initial' }}>
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
        </Container>
      </Box>





      <Box>
        <Container maxW={1600}>
          <Flex mt={'100px'} mr={{lg:'0',base:'20px'}} ml={{lg:'250px',base:'30'}} display={{lg:'flex',base:'grid'}}>
            <Box flexBasis={'50%'}>
              <Heading size={'xl'}>Dr. Arif Alvi</Heading>
              <Text fontSize={'md'}>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</Text>
              <br />
              <Text fontSize={'md'}>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.</Text>
              <br />
              <Text fontSize={'md'}>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
            </Box>
            <Box flexBasis={'50%'} mx='auto' mt={{base:'30px'}}>
              <Image
                src='/Images/arif.png'
                alt='Earn while you learn'
                width={300}
                height={-10}
              />
            </Box>
          </Flex>
          
        </Container>
      </Box>





      <Box>
        <Container maxW={1600}>
          <Flex mt={'100px'} display={{lg:'flex',base:'column-reverse'}}>
            <Box flexBasis={'50%'} ml={{lg:'300px',base:'auto'}} mt={'50px'}>
              <Image
                src='/Images/logo.png'
                alt='Earn while you learn'
                width={400}
                height={-10}
              />
            </Box >
            <Box flexBasis={'50%'} mr={{lg:'180px',base:'10'}} ml={{lg:'0',base:'30px'}}>
              <Heading size={'xl'}>Panaverse DAO</Heading>
              <Text fontSize={'md'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet</Text>
              <br />
              <Text fontSize={'md'}>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
            </Box>
          </Flex>
          
        </Container>
      </Box>



      <Box>
        <Container maxW={1600}>
          <Flex mt={'100px'} mr={{lg:'0',base:'20px'}} ml={{lg:'250px',base:'30'}} display={{lg:'flex',base:'grid'}}>
            <Box flexBasis={'50%'}>
              <Heading size={'xl'}>Zia Khan</Heading>
              <Text fontSize={'md'}>CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.</Text>
              <br />
              <Text fontSize={'md'}>Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.</Text>
            </Box>
            <Box flexBasis={'50%'} mx='auto' mt={{base:'30px'}}>
              <Image
                src='/Images/ziaKhan.jpg'
                alt='Earn while you learn'
                width={400}
                height={-10}
              />
            </Box>
          </Flex>
          
        </Container>
      </Box>



      <Box mt={'100px'}>
        <Heading size={'2xl'} ml={{lg:'650px',md:'250px',base:'100px'}} >Our Heros</Heading>
        <Flex maxW={1100} ml={{lg:'250px',base:'50px'}} display={{lg:'flex',base:'grid'}} mr={{lg:'0',base:'20px'}}>
          <Center flexBasis={'40%'} maxW={1200} pt={20}>
            <Box
              maxW={'320px'}
              w={'full'}
              bg='white'
              boxShadow={'dark-lg'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <Avatar
                size={'2xl'}
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVk6KpfXy-7JcP2vS2yZ6pJ3lIhFqgFBwflJUB6qq9g&s'
                }
                mb={-10}
                pos={'relative'}
                top={'-70px'}
              />
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Zia Khan
              </Heading>
              <Text
                textAlign={'center'}
                color={'gray.700'}
                px={3}>
                LEAD FACULTY MEMBER <br />
                Teaching Web3 and Metaverse technologies
              </Text>

              <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}>
                  Message
                </Button>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  Follow
                </Button>
              </Stack>
            </Box>
          </Center>
           

          <Center flexBasis={'40%'} maxW={1200} pt={20} pl={{lg:'50px',base:'0'}}>
            <Box
              maxW={'320px'}
              w={'full'}
              bg={'white'}
              boxShadow={'dark-lg'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <Avatar
                size={'2xl'}
                src={
                  'https://panaverse-site-usmanashrf.vercel.app/HiraKhan.png'
                }
                mb={-10}
                pos={'relative'}
                top={'-70px'}
              />
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Hira Khan
              </Heading>
              <Text
                textAlign={'center'}
                color={'gray.700'}
                px={3}>
                DIRECTOR AT THE WIT <br />
                Teaching TypeScript and NextJs technologies
              </Text>

              <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}>
                  Message
                </Button>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  Follow
                </Button>
              </Stack>
            </Box>
          </Center>
          

          <Center flexBasis={'40%'} maxW={1200} pt={20} pl={{lg:'50px',base:'0'}}>
            <Box
              maxW={'320px'}
              w={'full'}
              bg={'white'}
              boxShadow={'dark-lg'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <Avatar
                size={'2xl'}
                src={
                  'https://panaverse-site-usmanashrf.vercel.app/adil.jpg'
                }
                mb={-10}
                pos={'relative'}
                top={'-70px'}
              />
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Adil Altaf
              </Heading>
              <Text
                textAlign={'center'}
                color={'gray.700'}
                px={5}>
                FULL STACK CLOUD DEVELOPER <br />
                Teaching TypeScript and NextJs technologies
              </Text>
              <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}>
                  Message
                </Button>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  Follow
                </Button>
              </Stack>
            </Box>
          </Center>
        </Flex>


        <Flex maxW={1100} ml={{lg:'250px',base:'30px'}} mr={{lg:'0',base:'20px'}} display={{lg:'flex',base:'grid'}} mb={'50px'}>
          <Center flexBasis={'50%'} maxW={1200} pt={20} pl={{lg:'200px',base:'0'}}>
            <Box
              maxW={'320px'}
              w={'full'}
              bg={'white'}
              boxShadow={'dark-lg'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <Avatar
                size={'2xl'}
                src={
                  'https://panaverse-site-usmanashrf.vercel.app/Daniyal.png'
                }
                mb={-10}
                pos={'relative'}
                top={'-70px'}
              />
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Daniyal Nagori
              </Heading>
              <Text
                textAlign={'center'}
                color={'gray.700'}
                px={3}>
                SOFTWARE DEVELOPMENT LEAD<br />
                Teaching Web3 and Metaverse technologies
              </Text>

              <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}>
                  Message
                </Button>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  Follow
                </Button>
              </Stack>
            </Box>
          </Center>
          

          
          <Center flexBasis={'50%'} maxW={1200} pt={20} pl={{lg:'10px',base:'0'}}>
            <Box
              maxW={'320px'}
              w={'full'}
              bg={'white'}
              boxShadow={'dark-lg'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <Avatar
                size={'2xl'}
                src={
                  'https://media.licdn.com/dms/image/C4E03AQHtvGSpsfadRg/profile-displayphoto-shrink_800_800/0/1517684731220?e=2147483647&v=beta&t=9VvJMkTuQnBzoqprL-7HQaLgWYBQj_ubr4eL4fpp23w'
                }
                mb={-10}
                pos={'relative'}
                top={'-70px'}
              />
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Zeeshan Hanif
              </Heading>
              <Text
                textAlign={'center'}
                color={'gray.700'}
                px={3}>
                SOFTWARE DEVELOPMENT LEAD<br />
                Teaching TypeScript and NextJs technologies
              </Text>

              <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}>
                  Message
                </Button>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  Follow
                </Button>
              </Stack>
            </Box>
          </Center>
          
        </Flex>
      </Box>
      <Footer />
    </>
  )
}
