'use client'
import { Box, Image as chakraImage, Button, Container, Flex, SimpleGrid, Menu, MenuButton, MenuList, MenuItem, IconButton, Heading, Text, Card, CardBody, Stack, Divider, CardFooter, ButtonGroup, Center, useColorModeValue, Avatar, Badge, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
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





      <Box pt='50px'>
        <Container maxW={1400}>
          <Center flexDir='column'>
            <Heading size='2xl'>Our Syllabus</Heading>
            <Text mt='20px' textAlign='center' px={{lg:'150px',base:'20px'}}>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
          </Center>
          <Center flexDir='column' mt='20px'>
            <Heading size='xl'>Core Courses</Heading>
            <Text mt='20px' textAlign='center' px={{lg:'150px',base:'20px'}}>Every participant of the program will start by completing the following three core courses:</Text>
          </Center>
          <Center>
            <Flex mt='50px' gap='20px' display={{lg:'flex',base:"grid"}}>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter I</Heading>
                <Text color='white' pt='5px'>CS-101: Object-Oriented Programming using TypeScript and Typescript for React</Text>
              </Box>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter II</Heading>
                <Text color='white' pt='5px'>W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text>
              </Box>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter III</Heading>
                <Text color='white' pt='5px'>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Text>
              </Box>
            </Flex>
          </Center>
        </Container>








        <Center flexDir='column' mt='40px'>
            <Heading size='xl'>Specialized Tracks</Heading>
            <Text mt='20px' textAlign='center' px={{lg:'150px',base:'20px'}}>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
          </Center>
        <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'}
    backgroundPosition={'center center'} w={'full'} bgAttachment='fixed'>
        <Container maxW={1400} mt='50px' pt={'40px'}>
          <Center flexDir='column'>
            <Heading textAlign='center' color='white' size='xl'>1- Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
            <Text color='white' mt='20px' textAlign='center' px={{lg:'130px',base:'20px'}}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</Text>
          </Center>
          <Center>
            <Flex mt='50px' gap='20px' display={{lg:'flex',base:"grid"}}>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter IV</Heading>
                <Text color='white' pt='5px'>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Text>
              </Box>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter V</Heading>
                <Text color='white' pt='5px'>MV-361: Developing Planet-Scale and Augmented Metaverse Experiences</Text>
              </Box>
            </Flex>
          </Center>
        </Container>
        
        <Container maxW={1400} mt='50px'>
          <Center flexDir='column'>
            <Heading textAlign='center' size='xl' color='white'>2- Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
            <Text color='white' mt='20px' textAlign='center' px={{lg:'150px',base:'20px'}}>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
          </Center>
          <Center>
            <Flex mt='50px' gap='20px' display={{lg:'flex',base:"grid"}}>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter IV</Heading>
                <Text color='white' pt='5px'>AI-351: Developing Planet-Scale APIs and Python Programming</Text>
              </Box>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter V</Heading>
                <Text color='white' pt='5px'>AI-361: Deep Learning and MLOps (Machine Learning Operations)</Text>
              </Box>
            </Flex>
          </Center>
        </Container>
        
        <Container maxW={1400} mt='50px'>
          <Center flexDir='column'>
            <Heading textAlign='center' color='white' size='xl'>3- Cloud-Native Computing Specialization</Heading>
            <Text color='white' mt='20px' textAlign='center' px={{lg:'150px',base:'20px'}}>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>
          </Center>
          <Center>
            <Flex mt='50px' gap='20px' display={{lg:'flex',base:"grid"}}>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter IV</Heading>
                <Text color='white' pt='5px'>CN-351: Certified Kubernetes Application Developer (CKAD)</Text>
              </Box>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter V</Heading>
                <Text color='white' pt='5px'>CN-361: Developing Multi-Cloud APIs using CDK for Terraform</Text>
              </Box>
            </Flex>
          </Center>
        </Container>
        
        <Container maxW={1400} mt='50px'>
          <Center flexDir='column'>
            <Heading textAlign='center' color='white' size='xl'>4- Ambient Computing and IoT Specialization</Heading>
            <Text color='white' mt='20px' textAlign='center' px={{lg:'150px',base:'20px'}}>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.</Text>
          </Center>
          <Center>
            <Flex mt='50px' gap='20px' display={{lg:'flex',base:"grid"}}>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter IV</Heading>
                <Text color='white' pt='5px'>AC-351: Ambient Computing with Voice Assistants and Matter Devices</Text>
              </Box>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter V</Heading>
                <Text color='white' pt='5px'>AC-361: Embedded Programming using C and Rust</Text>
              </Box>
            </Flex>
          </Center>
        </Container>
        
        <Container maxW={1400} mt='50px'>
          <Center flexDir='column'>
            <Heading textAlign='center' color='white' size='xl' >5- Genomics and Bioinformatics Specialization</Heading>
            <Text color='white' mt='20px' textAlign='center' px={{lg:'150px',base:'20px'}}>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focus on performing complex bioinformatics analysis using the most essential Python libraries and applications</Text>
          </Center>
          <Center>
            <Flex mt='50px' gap='20px' display={{lg:'flex',base:"grid"}}>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter IV</Heading>
                <Text color='white' pt='5px'>Bio-351: Python for Biologists</Text>
              </Box>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter V</Heading>
                <Text color='white' pt='5px'>Bio-361: Bioinformatics with Python</Text>
              </Box>
            </Flex>
          </Center>
        </Container>
        
        <Container maxW={1400} mt='50px' pb={'40px'}>
          <Center flexDir='column'>
            <Heading textAlign='center' color='white' size='xl'>6- Network Programmability and Automation Specialization</Heading>
            <Text color='white' mt='20px' textAlign='center' px={{lg:'150px',base:'20px'}}>More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</Text>
          </Center>
          <Center>
            <Flex mt='50px' gap='20px' display={{lg:'flex',base:"grid"}}>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter IV</Heading>
                <Text color='white' pt='5px'>NPA-351: CCNA(Cisco Certified Network Ass.) 200-301 Certification</Text>
              </Box>
              <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'} textAlign='center' p='40px' boxShadow='dark-lg' borderRadius='20px' width='290px'>
                <Heading color='white'>Quarter V</Heading>
                <Text color='white' pt='5px'>NPA-361: Network Programmability and Automation</Text>
              </Box>
            </Flex>
          </Center>
        </Container>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
