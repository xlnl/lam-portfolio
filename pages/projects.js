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
  Link, 
  Spacer
} from '@chakra-ui/react'

import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext 
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import { ArrowForwardIcon, ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'

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
    dep: "https://lam-anhle.vercel.app/",
    title: "Lam's Portfolio",
    description: "A Next.js professional portfolio bootstrapped with React, utilizing Chakra-UI to showcase me, myself, and I!"
  }
 // make this into a gallery function later 
  return (
    <>
      <Stack
        as="main"
        alignItems="flex-start"
        m="0 auto 2rem auto"
        maxWidth="800px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <CarouselProvider
            visibleSlides={1}
            naturalSlideWidth={300}
            naturalSlideHeight={400}
            isIntrinsicHeight={true}
            totalSlides={4}
            infinite="true"
          >
            <HStack>
              <Heading>My Work</Heading>
              <HStack p={5}>
                <Button size="xs">
                  <ButtonBack><ChevronLeftIcon /></ButtonBack>
                </Button>
                <Button size="xs">
                  <ButtonNext><ChevronRightIcon /></ButtonNext>
                </Button>
              </HStack>
            </HStack>
            <Slider>
              <Slide index={0}>
                <Flex>
                  <Box w="700px" h="200px" borderWidth="1px" borderRadius="sm" p={2}>
                    <HStack>
                      <Image w="300px" src={project1.imageUrl} alt={project1.imageAlt} />
                      <Box p="6">
                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h3"
                          lineHeight="tight"
                          isTruncated
                        >
                          {project1.title}
                        </Box>
                        <Spacer />
                        <Box>
                          <Text fontSize="12px">{project1.description}</Text>
                        </Box>
                        <Spacer />
                        <HStack p={2}>
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
                    </HStack>  
                </Box>
                </Flex>
              </Slide>
              <Slide index={1}>
                <Flex>
                  <Box w="700px" h="200px" borderWidth="1px" borderRadius="sm" p={2}>
                    <HStack>
                      <Image w="300px" src={project2.imageUrl} alt={project2.imageAlt} />
                      <Box p="6">
                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h3"
                          lineHeight="tight"
                          isTruncated
                        >
                          {project2.title}
                        </Box>
                        <Spacer />
                        <Box>
                          <Text fontSize="12px">{project2.description}</Text>
                        </Box>
                        <Spacer />
                        <HStack p={2}>
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
                    </HStack>  
                </Box>
                </Flex>
              </Slide>
              <Slide index={2}>
                <Flex>
                  <Box w="700px" h="200px" borderWidth="1px" borderRadius="sm" p={2}>
                    <HStack>
                      <Image w="300px" src={project3.imageUrl} alt={project3.imageAlt} />
                      <Box p="6">
                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h3"
                          lineHeight="tight"
                          isTruncated
                        >
                          {project3.title}
                        </Box>
                        <Spacer />
                        <Box>
                          <Text fontSize="12px">{project3.description}</Text>
                        </Box>
                        <Spacer />
                        <HStack p={2}>
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
                    </HStack>  
                </Box>
                </Flex>
              </Slide>
              <Slide index={3}>
                <Flex>
                  <Box w="700px" h="200px" borderWidth="1px" borderRadius="sm" p={2}>
                    <HStack>
                      <Image w="300px" src={project4.imageUrl} alt={project4.imageAlt} />
                      <Box p="6">
                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h3"
                          lineHeight="tight"
                          isTruncated
                        >
                          {project4.title}
                        </Box>
                        <Spacer />
                        <Box>
                          <Text fontSize="12px">{project4.description}</Text>
                        </Box>
                        <Spacer />
                        <HStack p={2}>
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
                    </HStack>  
                </Box>
                </Flex>
              </Slide>
            </Slider>
          </CarouselProvider>
        </Flex>
      </Stack>
    </>
  )
}


