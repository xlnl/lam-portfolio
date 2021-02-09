import {
    AppBar,
    Toolbar,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
    useScrollTrigger,
    Fab
} from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom"
import Image from 'next/image'
  
const headersData = [
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "Contact",
        href: "/contact",
    }
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#FFFFFF",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
      },
    },
    nameLogo: {
        flexGrow: 1
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
}));
  
function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
}
  
export default function NavBar(props) {
    const { header, nameLogo, menuButton, toolbar, drawerContainer } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
        return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const lamLogo = (
        <div className={nameLogo}>
            <a href="/home">
                <Image src='/full-name-nav-08.png' alt="lam-anh-le" width="268" height="99"/>
            </a>
        </div>
    );

    const displayDesktop = () => {
        return (
        <>
            <Toolbar className={toolbar}>
                {lamLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
        <Toolbar>
            <IconButton
            {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
            }}
            >
            <MenuIcon />
            </IconButton>

            <Drawer
            {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
            }}
            >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>

            <div>{lamLogo}</div>
        </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
        return (
            <Link
            {...{
                component: RouterLink,
                as: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
            }}
            >
            <MenuItem>{label}</MenuItem>
            </Link>
        );
        });
    };

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
        return (
            <Button
            {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton,
            }}
            >
            {label}
            </Button>
        );
        });
    };

    return (
        <header>
            <AppBar className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}
  