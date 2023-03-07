import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box } from '@mui/system';
import { Typography } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import Main from "../Main/Main";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { DrawerContext } from '../../context/DrawerContext';


const drawerWidth = 180;

const MenuItems = [
    {
        Title: 'Live Orders',
        Icon: RoomServiceIcon
    },
    {
        Title: 'Menu',
        Icon: RestaurantMenuIcon
    },
    {
        Title: 'Reservation',
        Icon: ChairAltIcon
    },
    {
        Title: 'Reports',
        Icon: AssessmentIcon
    },
    {
        Title: 'Manage Outlet',
        Icon: StorefrontIcon
    },
    {
        Title: 'Complaints',
        Icon: ErrorOutlineIcon
    },
    {
        Title: 'Help',
        Icon: HelpOutlineIcon
    },
]



const draweredMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'drawer' })(
    ({ theme, drawer }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(drawer && {
            ...draweredMixin(theme),
            '& .MuiDrawer-paper': draweredMixin(theme),
        }),
        ...(!drawer && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export default function MiniDrawer() {
    const [drawer, setDrawer] = useState(true);


    const handleDrawer = () => {
        setDrawer(!drawer);
    };



    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 992 && drawer === true) {
                setDrawer(false);
            } else if (window.innerWidth > 992 && drawer !== false) {
                setDrawer(true);
            }

        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <DrawerContext.Provider value={{ setDrawer, drawer }}>
            {/* <Container maxWidth="md" sx={{ position: "relative" }}> */}
            <Box sx={{ display: 'flex', zIndex: 1, position: "relative" }}>
                <CssBaseline />
                <Drawer variant="permanent" drawer={drawer} sx={{
                    '& .MuiDrawer-root': {
                        position: 'absolute'
                    },
                    '& .MuiPaper-root': {
                        position: 'absolute'
                    },

                }}>
                    <List className="sidebar">
                        <ListItem disablePadding sx={{ display: 'block', position: "relative", right: 0, top: 0 }}>
                            <ListItemButton onClick={handleDrawer}
                                sx={{
                                    minHeight: 48,
                                    px: 2.5,

                                }}
                            >
                                {drawer ? <ChevronLeftIcon /> : <ChevronRightIcon />}

                            </ListItemButton>
                        </ListItem>
                        {MenuItems.map((item, index) => (

                            <ListItem key={index} disablePadding sx={{ display: 'block', borderRadius: "10px" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: drawer ? 'initial' : 'center',
                                        right: drawer ? "initial" : 0,
                                        top: 0,
                                        px: 2.5,
                                    }}
                                >
                                    <item.Icon sx={{
                                        minWidth: 0,
                                        mr: drawer ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }} />
                                    <Typography
                                        variant="body1"
                                        noWrap
                                        component="div"
                                        sx={{ opacity: drawer ? 1 : 0, fontSize: "12px" }}>
                                        {item.Title}
                                    </Typography>
                                </ListItemButton>
                                {index === 0 ? null : <Divider sx={{ backgroundColor: "#003b92", width: "90%", m: "auto", }} />}
                            </ListItem>


                        ))}
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Main />
                </Box>
            </Box>
            {/* </Container> */}
        </DrawerContext.Provider>

    );
}