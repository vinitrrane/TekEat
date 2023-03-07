import React from "react";
import CardComponent from "./CardComponent";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';



const OrdersPage = () => {

    return <>
        <Box sx={{ backgroundColor: "#ececec", py: 1 }}>

            <Box component="div" sx={{ m: 1, p: 1, border: "1px solid lightgray", borderRadius: "5px", height: "40px", display: "flex", justifyContent: "start", alignItems: "center" }}>
                <Typography variant="p" component="div">All orders </Typography><AutorenewIcon />
            </Box>
            <Box component="div">
                <CardComponent />
            </Box>
        </Box>


    </>
}

export default OrdersPage;
