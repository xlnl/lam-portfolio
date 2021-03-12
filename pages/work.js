import {
  useColorMode,
  Stack, 
  Flex, 
} from '@chakra-ui/react'

import Projects from './projects'
import Research from './research'

export default function Work() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <>
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
          <Projects />
          <Research />
        </Flex>
      </Stack>
    </>
  )
}