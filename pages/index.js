import Head from 'next/head'
import {
  useColorMode,
  Stack, 
  Flex, 
} from '@chakra-ui/react'

// import Layout from '../components/Layout'
import Landing from './landing'
import About from './about'
import Work from './work'
import Contact from './contact'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const showContent = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <Head>
        <title>Lam-Anh Le</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        >
          <Landing />
          <About />
          <Work />
          <Contact />
        </Flex>
      </Stack>
    </>
  )
}