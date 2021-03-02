import {
  useColorMode,
  Text,
  Stack, 
  Flex, 
  Heading,
  Spacer,
  Image,
  HStack,
  Link
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
        justifyContent="center"
        alignItems="center"
        maxWidth="700px"
      >
        <Heading mb={2}>Let's Connect!</Heading>
        <HStack>
          <Link href="https://github.com/xlnl" passHref>
            <Image w="30px" src="../github-sign.svg"></Image>
          </Link>
          <Link href="https://www.linkedin.com/in/lamanhle/" passHref>
            <Image w="30px" src="../linkedin.svg"></Image>
          </Link>
          <Image w="40px" src="../email.svg"></Image>
          <Text color={colorSecondary[colorMode]}>lamanhle@gmail.com</Text>
        </HStack>
        <HStack>
        </HStack>
      </Flex>
      <Spacer />
    </Stack>
  )
}