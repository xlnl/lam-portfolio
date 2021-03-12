import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Image, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import styled from '@emotion/styled'
// import { Image } from "next/image"

import DarkModeSwitch from "../components/DarkModeSwitch"

const Layout = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: '#F0FFF4',
        dark: '#1A202C'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.200',
        dark: 'red.800',
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
    `

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="750px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <DarkModeSwitch />
                <NextLink href="/"> 
                    {/* <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                        Home
                    </Button> */}
                    <Image 
                    w="50px"
                    src="../Lam-Logo.png" alt="Lam-Anh N. Le" />
                </NextLink>
                <Menu>
                    <MenuButton as={Button} variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }} rightIcon={<ChevronDownIcon />}>Menu</MenuButton>
                    <MenuList>
                        <MenuItem>
                            <NextLink href="/about" passHref> About
                                {/* <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                                    About
                                </Button> */}
                            </NextLink>
                        </MenuItem>
                        <MenuItem>
                            <NextLink href="/work" passHref> Work
                                {/* <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                                    Projects
                                </Button> */}
                            </NextLink>
                        </MenuItem>
                        <MenuItem>
                            <NextLink href="/contact" passHref> Contact
                                {/* <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                                    Contact
                                </Button> */}
                            </NextLink>
                        </MenuItem>
                        <MenuItem>
                            <NextLink href="https://drive.google.com/file/d/1vV4zCZ4s8uK_wNQew6Um50fXeuAKX6An/view?usp=sharing" passHref> Resume
                                {/* <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                                    Contact
                                </Button> */}
                            </NextLink>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </StickyNav >
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Layout

