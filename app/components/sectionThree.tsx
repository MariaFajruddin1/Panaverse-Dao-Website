'use client'
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.700', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bgImage={'https://tabtimize.com/wp-content/themes/oceanwp/images/Base.png'} backgroundSize={'cover'}
      backgroundPosition={'center center'} w={'full'}
     mt={'100px'}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading color={'white'}>Students Feedback</Heading>
          <Text color={'white'}>What our Student say about Panaverse Dao</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Blockchain</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'data:image/jpeg;base64,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'
              }
              name={'Bilal Hadid'}
              title={'Karachi'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Web 3.0 and Metaverse</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'data:image/jpeg;base64,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'
              }
              name={'Maria Fajruddin'}
              title={'Islamabad'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Internet of Thing</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAE+CAMAAACk8jItAAAAVFBMVEUAAAD///+Xl5daWlpsbGzDw8OQkJBJSUmbm5vv7+9BQUFwcHBVVVV9fX0qKipMTEz19fUaGhpSUlIxMTGGhobk5OTc3Nzq6urR0dHJycmnp6e9vb1XWYU2AAABNElEQVR4nO3azU7CQBSA0REK1vJXRUTw/d9TjIkb2+mYTLgYztneNvk27WLmpgQAAAAAAAAAAAAAAAAAAAAAcNfm7ayudl21r32ora3aN6veN9OnT58+ffr06dOn7/76+qdsxfj0Kn3H5vkl2zffv44kXqPvcJnM832XJ97C+pqivi6sLxX1pWNQ36Gw7z2ob1HYt9CnT58+ffr06dP33/oG72dOhX2noUnd+5lu1fyyWhf2rYde7qr2jSvoC6VPnz59+vTp06dPnz59+vTp0zelufG+TbZvE52Xztm+c3Te8OHej4/ovJTfLzlE5+U/j+8VikBdP9HX7yPzVhN1XyJ/McuCvqU+ffr06dOnT5++YiVr73UXIf5mu3ucstsG9gEAAAAAAAAAAAAAAAAAAAAA3K5PWSsa10nWJn8AAAAASUVORK5CYII='
              }
              name={'Talal Anus'}
              title={'Lahore'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
