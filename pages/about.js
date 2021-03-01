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
  const aboutData = {
    p1: "I am an analyst developer with expertise in software engineering, graphic design, and data analysis, and extensive experience in communications strategy, development, and international relations research.",
    p2: "Through my curious and compassionate character, I can quickly adapt to complex concepts and streamline processes to advance key objectives individually and with diverse teams under tight or competing deadlines.",
    p3: "My passion for public service and project management skills align with my innate ability to learn and translate abstract ideas into practical applications. This enables me to express my creativity, connect with teams under a guiding mission, and tackle real-world challenges in innovative ways."
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
        <Heading mb={2}>Who Am I?</Heading>
        <Text color={colorSecondary[colorMode]}>{aboutData.p1}</Text>
        <br></br>
        <Text color={colorSecondary[colorMode]}>{aboutData.p2}</Text>
        <br></br>
        <Text color={colorSecondary[colorMode]}>{aboutData.p3}</Text>
      </Flex>
    </Stack>
  )
}