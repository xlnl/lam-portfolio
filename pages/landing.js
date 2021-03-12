import Head from 'next/head'
import {
  useColorMode,
  Stack, 
  Flex, 
  Image, 
  Box, 
  Heading
} from '@chakra-ui/react'

export default function Landing() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <>
      <Stack
        as="main"
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
          <Box w="700px" objectFit="cover">
              <Image src="./landing-graphic-01.png" alt="Hey There, I'm Lam-Anh Le. Software Engineer, Data Analyst, Communications Connoisseur" />
          </Box>
        </Flex>
      </Stack>
    </>
  )
}