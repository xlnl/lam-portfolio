import Head from 'next/head'
import {
  useColorMode,
  Stack, 
  Flex, 
  Image, 
  Box, 
  Heading
} from '@chakra-ui/react'

// import Layout from '../components/Layout'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import Carousel from '../components/Carousel'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <>
      <Head>
        <title>Lam-Anh Le</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="700px"
        >
          <Box w="500px" objectFit="cover">
              <Image src="./Portfolio-Landing-05.png" alt="I'm Lam-Anh Le" />
          </Box>
          <Box w="500px" objectFit="cover">
              <Image src="./Portfolio-Landing-06.png" alt="I'm Lam-Anh Le" />
          </Box>
          <Box>
              <Heading size="70px" color={colorSecondary[colorMode]}>Software Engineer & Data Analyst</Heading>
          </Box>
        </Flex>
      </Stack>
      <Stack
        as="main"
        spacing={8}
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        >
          <About />
          <Projects />
          <Contact />
        </Flex>
      </Stack>
    </>
  )
}