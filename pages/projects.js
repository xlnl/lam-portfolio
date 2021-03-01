import {
  useColorMode,
  Text,
  Stack, 
  Flex, 
  Heading,
  Box,
  Image,
  Badge
} from '@chakra-ui/react'

export default function About() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  const project1 = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Tootris",
    description: "A quirky take on (and unique rendition of) Tetris, this web application utilizes vanilla Javascript, HTML5 Canvas, CSS, game logic, and DOM manipulation."
  }

  const project2 = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Mines Sweeper",
    description: "A Full Stack website utilizing Node.js, Express/PostgreSQL, Sequelize, and Bootstrap with a RESTful API built by me for users in former conflict zones to submit tips on potential bomb threats."
  }

  const project3 = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Petflix",
    description: "A Full Stack React social media and pet management tracker application built with Node.js, Mongoose/MongoDB, and Material-UI for users to showcase their wonderful pets by uploading pet flicks, tracking pet milestones, and logging journal entries."
  }

  const project4 = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Caleidoscope",
    description: "A Full Stack React personal management application built with Flask, Python, and Chakra-UI for users to take notes and plan their day based on their current weather and horoscope sign."
  }
 // make this into a gallery function later 
  return (
    <>
      <Stack
        as="main"
        spacing={8}
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
     
          <Box w="350px" h="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" p="10px" m="0 .25rem">
            <Image w="330px" src={project1.imageUrl} alt={project1.imageAlt} />

            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {project1.title}
              </Box>

              <Box>
                <Text fontSize="14px">{project1.description}</Text>
              </Box>

            </Box>
          </Box>

          <Box w="350px" h="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" p="10px" m="0 .25rem">
            <Image src={project2.imageUrl} alt={project2.imageAlt} />

            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {project2.title}
              </Box>

              <Box>
                <Text fontSize="14px">{project2.description}</Text>
              </Box>

            </Box>
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
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Box w="350px" h="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" p="10px" m="0 .25rem">
            <Image src={project3.imageUrl} alt={project3.imageAlt} />

            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {project3.title}
              </Box>

              <Box>
                <Text fontSize="14px">{project3.description}</Text>
              </Box>

            </Box>
          </Box>

          <Box w="350px" h="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" p="10px" m="0 .25rem">
            <Image src={project4.imageUrl} alt={project4.imageAlt} />

            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {project4.title}
              </Box>

              <Box>
                <Text fontSize="14px">{project4.description}</Text>
              </Box>

            </Box>
          </Box>
        </Flex>
      </Stack>
    </>
  )
}


