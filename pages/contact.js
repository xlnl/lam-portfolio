import {
  useColorMode,
  Text,
  Stack, 
  Flex, 
  Heading
} from '@chakra-ui/react'

export default function About() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
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
        <Heading mb={2}>Contact Me!</Heading>
        <Text color={colorSecondary[colorMode]}>lamanhle@gmail.com</Text>
      </Flex>
    </Stack>
  )
}