import {
  useColorMode,
  Text,
  Stack, 
  Flex, 
  Heading,
  Box,
  Image,
  Button,
  HStack,
  Link
} from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function About() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const navHoverBg = {
    light: 'gray.200',
    dark: 'red.800',
  }

  const project1 = {
    imageUrl: "../Tootris-app.png",
    imageAlt: "Screenshot of Tootris Project",
    gh: "https://github.com/xlnl/project-one-tetris",
    dep: "https://xlnl.github.io/project-one-tetris/",
    title: "Tootris",
    description: "A quirky take on (and unique rendition of) Tetris, this web application utilizes vanilla Javascript, HTML5 Canvas, CSS, game logic, and DOM manipulation."
  }

  const project2 = {
    imageUrl: "../Mines-app.png",
    imageAlt: "Screenshot of Mines Sweeper Project",
    gh: "https://github.com/xlnl/project-two-minessweeper",
    dep: "https://minessweeper.herokuapp.com/",
    title: "Mines Sweeper",
    description: "A Full Stack website utilizing Node.js, Express/PostgreSQL, Sequelize, and Bootstrap with a RESTful API built by me for users in former conflict zones to submit tips on potential bomb threats."
  }

  const project3 = {
    imageUrl: "../Cal-app.png",
    imageAlt: "Screenshot of Caleidoscope Project",
    gh: "https://github.com/xlnl/p4-caleidoscope-frontend",
    dep: "https://caleidoscope.herokuapp.com/",
    title: "Caleidoscope",
    description: "A Full Stack React personal management application built with Flask, Python, and Chakra-UI for users to take notes and plan their day based on their current weather and horoscope sign."
  }

  const project4 = {
    imageUrl: "../portfolio-app.png",
    imageAlt: "Screenshot of Portfolio Project",
    gh: "https://github.com/xlnl/lam-portfolio",
    dep: "https://lamanhle.herokuapp.com/",
    title: "Lam's Portfolio",
    description: "A Next.js professional portfolio bootstrapped with React, utilizing Chakra-UI to showcase me, myself, and I!"
  }
 // make this into a gallery function later 
  return (
    <>
      <Stack
        as="main"
        spacing={8}
        alignItems="flex-start"
        m="0 auto 2rem auto"
        maxWidth="700px"
        px={2}
      >
        <Heading>My Work</Heading>
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Box w="350px" h="400px" borderWidth="1px" borderRadius="lg" overflow="hidden" p="10px" m="0 .25rem">
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

              <HStack p={1} spacing={2}>
                <Box>
                  <Link href={project1.gh} passHref>
                    <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>See the Code</Button>
                  </Link>
                </Box>

                <Box>
                  <Link href={project1.dep} passHref>
                    <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>Try the App</Button>
                  </Link>
                </Box>
              </HStack>

            </Box>
          </Box>

          <Box w="350px" h="400px" borderWidth="1px" borderRadius="lg" overflow="hidden" p="10px" m="0 .25rem">
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

              <HStack p={1} spacing={2}>
                <Box>
                  <Link href={project2.gh} passHref>
                    <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>See the Code</Button>
                  </Link>
                </Box>

                <Box>
                  <Link href={project2.dep} passHref>
                    <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>Try the App</Button>
                  </Link>
                </Box>
              </HStack>

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
          <Box w="350px" h="400px" borderWidth="1px" borderRadius="lg" overflow="hidden" p="10px" m="0 .25rem">
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

              <HStack p={1} spacing={2}>
                <Box>
                  <Link href={project3.gh} passHref>
                    <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>See the Code</Button>
                  </Link>
                </Box>

                <Box>
                  <Link href={project3.dep} passHref>
                    <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>Try the App</Button>
                  </Link>
                </Box>
              </HStack>

            </Box>
          </Box>

          <Box w="350px" h="400px" borderWidth="1px" borderRadius="lg" overflow="hidden" p="10px" m="0 .25rem">
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

              <HStack p={1} spacing={2}>
                <Box>
                  <Link href={project4.gh} passHref>
                    <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>See the Code</Button>
                  </Link>
                </Box>

                <Box>
                  <Link href={project4.dep} passHref>
                    <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>Try the App</Button>
                  </Link>
                </Box>
              </HStack>

            </Box>
          </Box>
        </Flex>
      </Stack>
    </>
  )
}

