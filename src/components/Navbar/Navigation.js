import React from 'react';
import { Container, AppBar, Toolbar, IconButton, Typography, Switch, Badge, Box } from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navigation = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='sticky' className='navbar'>
          <Toolbar>
            <LocalPizzaIcon sx={{ mr: 1 }} />
            {/* <Typography
                        variant="body1"
                        noWrap
                        component="div"
                        sx={{ mr: 2 }}>
                        TekEat
                    </Typography> */}

            <Typography variant='body1' noWrap component='div'>
              Live Orders
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex' }}>
              <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
                <Badge badgeContent={3} color='warning'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
                <SettingsIcon />
              </IconButton>
              <IconButton
                size='small'
                aria-label='show 17 new notifications'
                color='inherit'
                sx={{ display: 'flex', flexDirection: 'column' }}>
                <Switch />
                <Typography variant='body2' noWrap>
                  Online
                </Typography>
              </IconButton>
              <IconButton
                size='large'
                edge='end'
                aria-label='account of current user'
                aria-controls=''
                aria-haspopup='true'
                color='inherit'>
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
