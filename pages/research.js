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
    Spacer, 
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
  
export default function Research() {
    const { colorMode } = useColorMode()
    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const navHoverBg = {
        light: 'gray.200',
        dark: 'red.800',
    }

    const paper1 = {
        link: "https://xlnl.github.io/project-one-tetris/",
        title: "Tootris",
        description: "A quirky take on (and unique rendition of) Tetris, this web application utilizes vanilla Javascript, HTML5 Canvas, CSS, game logic, and DOM manipulation."
    }

    const paper2 = {
        link: "https://minessweeper.herokuapp.com/",
        title: "Mines Sweeper",
        description: "A Full Stack website utilizing Node.js, Express/PostgreSQL, Sequelize, and Bootstrap with a RESTful API built by me for users in former conflict zones to submit tips on potential bomb threats."
    }

    const paper3 = {
        link: "https://github.com/xlnl/p4-caleidoscope-frontend",
        title: "Caleidoscope",
        description: "A Full Stack React personal management application built with Flask, Python, and Chakra-UI for users to take notes and plan their day based on their current weather and horoscope sign."
    }

    const paper4 = {
        link: "https://github.com/xlnl/p4-caleidoscope-frontend",
        title: "Lam's Portfolio",
        description: "A Next.js professional portfolio bootstrapped with React, utilizing Chakra-UI to showcase me, myself, and I!"
    }

    const paper5 = {
        link: "https://github.com/xlnl/p4-caleidoscope-frontend",
        title: "Lam's Portfolio",
        description: "A Next.js professional portfolio bootstrapped with React, utilizing Chakra-UI to showcase me, myself, and I!"
    }

    return (
        <>
        <Stack
            as="main"
            alignItems="flex-start"
        >
            <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            >
                <Box>
                    <CarouselProvider
                        visibleSlides={2}
                        naturalSlideWidth={800}
                        naturalSlideHeight={400}
                        totalSlides={5}
                        infinite="true"
                    >              
                        <HStack>
                            <Box>
                                <Heading>My Writing</Heading>
                            </Box>
                            <Box>
                                <HStack p={5}>
                                    <Button size="md" variant="ghost" color="orange.300">
                                        <ButtonBack><ChevronLeftIcon w={6} h={6}/></ButtonBack>
                                    </Button>
                                    <Button size="md" variant="ghost" color="orange.300">
                                        <ButtonNext><ChevronRightIcon w={6} h={6}/></ButtonNext>
                                    </Button>
                                </HStack> 
                            </Box>
                        </HStack>
                        <Slider>
                        <Slide index={0}>
                            <Flex>
                                <Box w="300px" h="300px">
                                    <Box>
                                        <Heading as="h4" size="md"> 
                                        {paper1.title}
                                        </Heading>
                                        <Spacer />
                                        <Box h="100px">
                                        <Text fontSize="sm">{paper1.description}</Text>
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            <Link href={paper1.link} passHref>
                                            <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>See the Code</Button>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                            </Flex>
                        </Slide>
                        <Slide index={1}>
                            <Flex>
                                <Box w="300px" h="300px">
                                    <Box>
                                        <Heading as="h4" size="md"> 
                                        {paper2.title}
                                        </Heading>
                                        <Spacer />
                                        <Box h="100px">
                                        <Text fontSize="sm">{paper2.description}</Text>
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            <Link href={paper2.link} passHref>
                                            <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>See the Code</Button>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                            </Flex>
                        </Slide>
                        <Slide index={2}>
                            <Flex>
                                <Box w="300px" h="300px">
                                    <Box>
                                        <Heading as="h4" size="md"> 
                                        {paper3.title}
                                        </Heading>
                                        <Spacer />
                                        <Box h="100px">
                                        <Text fontSize="sm">{paper3.description}</Text>
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            <Link href={paper3.link} passHref>
                                            <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>See the Code</Button>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                            </Flex>
                        </Slide>
                        <Slide index={3}>
                            <Flex>
                                <Box w="300px" h="300px">
                                    <Box>
                                        <Heading as="h4" size="md"> 
                                        {paper4.title}
                                        </Heading>
                                        <Spacer />
                                        <Box h="100px">
                                        <Text fontSize="sm">{paper4.description}</Text>
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            <Link href={paper4.link} passHref>
                                            <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>See the Code</Button>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                            </Flex>
                        </Slide>
                        <Slide index={4}>
                            <Flex>
                                <Box w="300px" h="300px">
                                    <Box>
                                        <Heading as="h4" size="md"> 
                                        {paper5.title}
                                        </Heading>
                                        <Spacer />
                                        <Box h="100px">
                                        <Text fontSize="sm">{paper5.description}</Text>
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            <Link href={paper5.link} passHref>
                                            <Button size="sm" fontSize="12px" variant="ghost" p={[1, 2, 4]}  _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>See the Code</Button>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                            </Flex>
                        </Slide>
                        </Slider>
                        <Spacer />
                    </CarouselProvider>
                </Box>
            </Flex>
        </Stack>
        </>
    )
}
  
  
  