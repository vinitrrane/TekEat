import React, { useState } from "react";
import { Box, Stack } from "@mui/system";
import { Button, Typography } from '@mui/material';




const StatusMenu = () => {

    const [activeNav, setActiveNav] = useState("#newOrder");
    return <>

        <Box sx={{ borderRadius: "0 0 10px 10px", backgroundColor: "#fff", p: 1 }}>
            <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-start" }} >
                <Button sx={{ fontSize: "0.7rem", p: 1, textTransform: "capitalize", pr: 4 }} size="small" variant="contained" className={activeNav === "#newOrder" ? " active-menu" : "menu-button"} onClick={() => setActiveNav("#newOrder")}>New Order
                    <Typography
                        variant="body2"
                        noWrap
                        component="span"

                        className={activeNav === "#newOrder" ? "active-menu-number" : "menu-number"}

                    >
                        3
                    </Typography>
                </Button>
                <Button sx={{ fontSize: "0.7rem", p: 1, textTransform: "capitalize", pr: 3 }} size="small" variant="contained" className={activeNav === "#preparing" ? "active-menu" : "menu-button"}
                    onClick={() => setActiveNav("#preparing")}>Preparing <Typography
                        variant="body2"
                        noWrap
                        component="span"
                        className={activeNav === "#preparing" ? "active-menu-number" : "menu-number"}
                    >
                        3
                    </Typography></Button>
                <Button sx={{ fontSize: "0.7rem", p: 1, textTransform: "capitalize", pr: 3 }} size="small" variant="contained" className={activeNav === "#ready" ? "active-menu" : "menu-button"} onClick={() => setActiveNav("#ready")}>Ready
                    <Typography
                        variant="body2"
                        noWrap
                        component="span"
                        className={activeNav === "#ready" ? "active-menu-number" : "menu-number"}
                    >
                        3
                    </Typography></Button>
                <Button sx={{ fontSize: "0.7rem", p: 1, textTransform: "capitalize", pr: 3 }} size="small" variant="contained" className={activeNav === "#pickedUp" ? "active-menu" : "menu-button"} onClick={() => setActiveNav("#pickedUp")}>Picked Up
                    <Typography
                        variant="body2"
                        noWrap
                        component="span"
                        className={activeNav === "#pickedUp" ? "active-menu-number" : "menu-number"}>
                        3
                    </Typography></Button>
                <Button sx={{ fontSize: "0.7rem", p: 1, textTransform: "capitalize", pr: 3 }} size="small" variant="contained" className={activeNav === "#pastOrder" ? "active-menu" : "menu-button"}
                    onClick={() => setActiveNav("#pastOrder")}>Past Order
                    <Typography
                        variant="body2"
                        noWrap
                        component="span"
                        className={activeNav === "#pastOrder" ? "active-menu-number" : "menu-number"}>
                        3
                    </Typography></Button>
            </Stack>
        </Box>


    </>
};

export default StatusMenu;
