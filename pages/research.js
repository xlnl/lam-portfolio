import {
    useColorMode,
    Text,
    Stack, 
    Flex, 
    Heading,
    Box,
    Button,
    HStack,
    Link, 
    Spacer,
    VStack 
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
        link: "https://docs.google.com/document/d/1laV16MPE724dw7NW4SywFCd3B5oh609dIEe_FA_QcDQ/edit?usp=sharing",
        title: "AR Technology Overview for Group Project on Digital Transformation",
        date: "March 1, 2021",
        description: "How does dirt and data go hand in hand for the average garden enthusiast? As mentioned in previous milestones, Scotts Miracle Gro has leveraged a number of software technologies as it moves toward an integrated IoT ecosystem that will offer data on a user’s soil levels, water, temperature, and pest control for precision watering and other guidance to achieve healthy gardens."
    }

    const paper2 = {
        link: "https://docs.google.com/document/d/1mfAagE0pBnWGRwkNNh1y5WT1_8_FusGDQeHIjusnY68/edit?usp=sharing",
        title: "Comparisons of Catching Up with South Korea and Thailand",
        date: "April 20, 2019",
        description: "Does an inclusive growth framework exist within the developmental paradigm and can it be emulated by other latecomers? This paper will analyze two essential case studies through that framework with context to their respective responses to external imbalances and exogenous shocks. South Korea and Thailand are comparable in the sense that they were severely impacted by the 1997 Asian financial crises and their economic divergence moving forward to the subsequent 2007/2008 financial crisis."
    }

    const paper3 = {
        link: "https://docs.google.com/document/d/1weDPDngO2n-S3DP0ygZ1kBaks7Q6sSF5XIr9arzAW2M/edit?usp=sharing",
        title: "Reflections of Vietnam's State Identity",
        date: "April 15, 2019",
        description: "In understanding the puzzle of how post-colonial states develop within the world of late modernity, it bears important weight to analyze the effects of colonialism and war in Vietnam. Through a critical discursive analysis of the legacy of French colonialism vis-a-vis its civilizing mission and U.S. involvement during the 1960s to 1975, this paper aims to highlight the ways in which Vietnam grapples with its colonial and war history in face of a modernizing world."
    }

    const paper4 = {
        link: "https://docs.google.com/document/d/1wR4O8O_YLxGvKOgK7DTKKoBHUFu9AZh9I0h9wZPRAH0/edit?usp=sharing",
        title: "Synthesis and Reflections of the Veterans for Peace Campaign",
        date: "March 10, 2019",
        description: "From Week Three to Week Eight, I’ve had the opportunity to delve deeper into the initial task of defining a social movement by learning more and personally connecting directly with a  U.S. veteran affected by issues pertinent to returning from military service."
    }

    const paper5 = {
        link: "https://docs.google.com/document/d/1nO-YcbJ94ASczPbseWhruvD30aVipZzSAhaBCDlWs1I/edit?usp=sharing",
        title: `Critical Book Review of "The Origins of the Civil Rights Movement"`,
        date: "February 20, 2019",
        description: "When thinking of social movements in contemporary society, the civil rights movement holds a unique case study into the inner workings of mobilization and critical theories of protest. Building an expansive, decade long, ethnographic research that covers the years 1953 to 1963 with countless interviews and witness accounts, Aldon D. Morris’ study into the birth of the civil rights movement, its key actors, and the sociological foundations of which the movement is built upon informs present day"
    }

    return (
        <>
        <Stack
            as="main"
            alignItems="flex-start"
            w={700}
        >
            <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            w={700}
            >
                <Box w={700}>
                    <CarouselProvider
                        visibleSlides={2}
                        naturalSlideWidth={700}
                        naturalSlideHeight={600}
                        totalSlides={5}
                        infinite="true"
                    >              
                        <HStack maxWidth={700}>
                            <Box>
                                <Heading>My Writing</Heading>
                            </Box>
                            <Spacer />
                            <Box>
                                <HStack p={5}>
                                    <Button size="md" variant="ghost" color="orange.400">
                                        <ButtonBack><ChevronLeftIcon w={6} h={6}/></ButtonBack>
                                    </Button>
                                    <Button size="md" variant="ghost" color="orange.400">
                                        <ButtonNext><ChevronRightIcon w={6} h={6}/></ButtonNext>
                                    </Button>
                                </HStack> 
                            </Box>
                        </HStack>
                        <Slider>
                            <Slide index={0}>
                                <Box w="300px" h="200px">
                                    <VStack
                                    flexDirection="column"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={1}
                                    align="stretch"
                                    >
                                        <Box>
                                            <Heading as="h4" size="md"> 
                                            {paper1.title}
                                            </Heading>
                                        </Box>
                                        <Box>
                                            <Text fontSize="xs">{paper1.date}</Text>
                                        </Box>
                                        <Box>
                                            <Text fontSize="sm" noOfLines={[1, 2, 4]}>{paper1.description}</Text>
                                        </Box>
                                        <Spacer />
                                        <Link href={paper1.link} passHref>
                                            <Button size="sm" fontSize="12px" variant="ghost" _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>Read More</Button>
                                        </Link>
                                    </VStack>
                                </Box>
                            </Slide>
                            <Slide index={1}>
                                <Box w="300px" h="200px">
                                    <VStack
                                    flexDirection="column"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={1}
                                    align="stretch"
                                    >
                                        <Box>
                                            <Heading as="h4" size="md"> 
                                            {paper2.title}
                                            </Heading>
                                        </Box>
                                        <Box>
                                            <Text fontSize="xs">{paper2.date}</Text>
                                        </Box>
                                        <Box>
                                            <Text fontSize="sm" noOfLines={[1, 2, 4]}>{paper2.description}</Text>
                                        </Box>
                                        <Spacer />
                                        <Link href={paper2.link} passHref>
                                            <Button size="sm" fontSize="12px" variant="ghost" _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>Read More</Button>
                                        </Link>
                                    </VStack>
                                </Box>
                            </Slide>
                            <Slide index={2}>
                                <Box w="300px" h="200px">
                                    <VStack
                                    flexDirection="column"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={1}
                                    align="stretch"
                                    >
                                        <Box>
                                            <Heading as="h4" size="md"> 
                                            {paper3.title}
                                            </Heading>
                                        </Box>
                                        <Box>
                                            <Text fontSize="xs">{paper3.date}</Text>
                                        </Box>
                                        <Box>
                                            <Text fontSize="sm" noOfLines={[1, 2, 4]}>{paper3.description}</Text>
                                        </Box>
                                        <Spacer />
                                        <Link href={paper3.link} passHref>
                                            <Button size="sm" fontSize="12px" variant="ghost" _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>Read More</Button>
                                        </Link>
                                    </VStack>
                                </Box>
                            </Slide>
                            <Slide index={3}>
                                <Box w="300px" h="200px">
                                    <VStack
                                    flexDirection="column"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={1}
                                    align="stretch"
                                    >
                                        <Box>
                                            <Heading as="h4" size="md"> 
                                            {paper4.title}
                                            </Heading>
                                        </Box>
                                        <Box>
                                            <Text fontSize="xs">{paper4.date}</Text>
                                        </Box>
                                        <Box>
                                            <Text fontSize="sm" noOfLines={[1, 2, 4]}>{paper4.description}</Text>
                                        </Box>
                                        <Spacer />
                                        <Link href={paper4.link} passHref>
                                            <Button size="sm" fontSize="12px" variant="ghost" _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>Read More</Button>
                                        </Link>
                                    </VStack>
                                </Box>
                            </Slide>
                            <Slide index={4}>
                                <Box w="300px" h="200px">
                                    <VStack
                                    flexDirection="column"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={1}
                                    align="stretch"
                                    >
                                        <Box>
                                            <Heading as="h4" size="md"> 
                                            {paper5.title}
                                            </Heading>
                                        </Box>
                                        <Box>
                                            <Text fontSize="xs">{paper5.date}</Text>
                                        </Box>
                                        <Box>
                                            <Text fontSize="sm" noOfLines={[1, 2, 3]}>{paper5.description}</Text>
                                        </Box>
                                        <Spacer />
                                        <Link href={paper5.link} passHref>
                                            <Button size="sm" fontSize="12px" variant="ghost" _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ArrowForwardIcon />}>Read More</Button>
                                        </Link>
                                    </VStack>
                                </Box>
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
  
  
  