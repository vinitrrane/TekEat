import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DrawerContext } from '../../context/DrawerContext';
import vegIcon from '../../assets/veg.png';
import nonVegIcon from '../../assets/nonveg.png';

const CardData = [
  {
    id: 4411111134341,
    time: '8:55 PM',
    menuItem1: 'Veg Thali',
    price1: 398,
    option1: 'No Spicy',
    addOns1: 'Dahi',
    menuItem2: 'Veg Thali',
    price2: 398,
    option2: 'No Spicy',
    addOns2: 'Dahi',
    menuItem3: 'Mutton Thali',
    price3: 398,
    option3: 'Spicy',
    addOns3: '1 Bhakri',
    menuItem4: 'Sukkha Mutton',
    price4: 398,
    option4: 'Spicy',
    addOns4: '1 Coke',
    instruction: 'We want 2 different packages for veg and non veg',
    total: 440,
    taxes: 0,
    totalBill: 440,
    paid: true,
  },
  {
    id: 4411111134342,
    time: '8:55 PM',
    menuItem1: 'Veg Thali',
    price1: 398,
    option1: 'No Spicy',
    addOns1: 'Dahi',
    menuItem2: 'Veg Thali',
    price2: 398,
    option2: 'No Spicy',
    addOns2: 'Dahi',
    menuItem3: 'Mutton Thali',
    price3: 398,
    option3: 'Spicy',
    addOns3: '1 Bhakri',
    menuItem4: 'Sukkha Mutton',
    price4: 398,
    option4: 'Spicy',
    addOns4: '1 Coke',
    instruction: 'We want 2 different packages for veg and non veg',
    total: 440,
    taxes: 0,
    totalBill: 440,
    paid: true,
  },
  {
    id: 4411111134343,
    time: '8:55 PM',
    menuItem1: 'Veg Thali',
    price1: 398,
    option1: 'No Spicy',
    addOns1: 'Dahi',
    menuItem2: 'Veg Thali',
    price2: 398,
    option2: 'No Spicy',
    addOns2: 'Dahi',
    menuItem3: 'Mutton Thali',
    price3: 398,
    option3: 'Spicy',
    addOns3: '1 Bhakri',
    menuItem4: 'Sukkha Mutton',
    price4: 398,
    option4: 'Spicy',
    addOns4: '1 Coke',
    instruction: 'We want 2 different packages for veg and non veg',
    total: 440,
    taxes: 0,
    totalBill: 440,
    paid: true,
  },
  {
    id: 4411111134344,
    time: '8:55 PM',
    menuItem1: 'Veg Thali',
    price1: 398,
    option1: 'No Spicy',
    addOns1: 'Dahi',
    menuItem2: 'Veg Thali',
    price2: 398,
    option2: 'No Spicy',
    addOns2: 'Dahi',
    menuItem3: 'Mutton Thali',
    price3: 398,
    option3: 'Spicy',
    addOns3: '1 Bhakri',
    menuItem4: 'Sukkha Mutton',
    price4: 398,
    option4: 'Spicy',
    addOns4: '1 Coke',
    instruction: 'We want 2 different packages for veg and non veg',
    total: 440,
    taxes: 0,
    totalBill: 440,
    paid: true,
  },
  {
    id: 4411111134345,
    time: '8:55 PM',
    menuItem1: 'Veg Thali',
    price1: 398,
    option1: 'No Spicy',
    addOns1: 'Dahi',
    menuItem2: 'Veg Thali',
    price2: 398,
    option2: 'No Spicy',
    addOns2: 'Dahi',
    menuItem3: 'Mutton Thali',
    price3: 398,
    option3: 'Spicy',
    addOns3: '1 Bhakri',
    menuItem4: 'Sukkha Mutton',
    price4: 398,
    option4: 'Spicy',
    addOns4: '1 Coke',
    instruction: 'We want 2 different packages for veg and non veg',
    total: 440,
    taxes: 0,
    totalBill: 440,
    paid: true,
  },
  {
    id: 4411111134346,
    time: '8:55 PM',
    menuItem1: 'Veg Thali',
    price1: 398,
    option1: 'No Spicy',
    addOns1: 'Dahi',
    menuItem2: 'Veg Thali',
    price2: 398,
    option2: 'No Spicy',
    addOns2: 'Dahi',
    menuItem3: 'Mutton Thali',
    price3: 398,
    option3: 'Spicy',
    addOns3: '1 Bhakri',
    menuItem4: 'Sukkha Mutton',
    price4: 398,
    option4: 'Spicy',
    addOns4: '1 Coke',
    instruction: 'We want 2 different packages for veg and non veg',
    total: 440,
    taxes: 0,
    totalBill: 440,
    paid: true,
  },
];

const CardComponent = () => {
  const { drawer } = useContext(DrawerContext);

  return (
    <Box sx={{ flexGrow: 1, p: 1, height: '78vh', overflow: 'scroll' }}>
      <Grid container spacing={1}>
        {CardData.map((card) => {
          return (
            <Grid key={card.id} item xs={12} md={drawer ? 6 : 4} sm={drawer ? 4 : 6}>
              <Card>
                <CardContent sx={{ maxWidth: '100%', p: 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                      variant='body1'
                      color='text.primary'
                      sx={{
                        fontSize: '12px',
                        backgroundColor: '#6096fe',
                        color: '#fff',
                        borderRadius: '0 0 4px 0',
                        p: 0.5,
                      }}>
                      New Orders
                    </Typography>
                    <Typography variant='body1' color='text.primary' sx={{ fontSize: '14px', p: 0.5 }}>
                      ID : <b>{card.id}</b>
                    </Typography>
                  </Box>

                  <Box
                    component='div'
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: 'linear-gradient(90deg, rgba(255,181,94,1) 0%, rgba(255,255,255,1) 70%)',
                      my: 0.5,
                      px: 0.5,
                    }}>
                    <Typography
                      variant='body2'
                      color='text.primary'
                      sx={{
                        fontSize: '12px',
                        color: '#cd542a',
                      }}>
                      TakeEat Delivery
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.primary'
                      sx={{
                        fontSize: '12px',
                      }}>
                      {card.time}
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      component='div'
                      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 0.5, px: 0.5 }}>
                      <Typography
                        variant='body1'
                        color='text.primary'
                        sx={{
                          fontSize: '12px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <img src={vegIcon} alt='veg' style={{ width: '14px', height: '14px' }} />
                        2x {card.menuItem1}
                      </Typography>
                      <Typography
                        variant='body1'
                        color='text.primary'
                        sx={{
                          fontSize: '12px',
                        }}>
                        &#8377; {card.price1}
                      </Typography>
                    </Box>
                    <Typography variant='body2' color='text.primary' sx={{ my: 0.5, px: 0.5, fontSize: '10px' }}>
                      {card.option1}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.primary'
                      sx={{ my: 0.5, px: 0.5, fontSize: '10px', color: '#7b7b7b' }}>
                      Add ons - {card.addOns1}
                    </Typography>
                    <Divider sx={{ backgroundColor: '#e4e4e4', width: '95%', m: 'auto', opacity: 0.4 }} />
                  </Box>
                  <Box>
                    <Box
                      component='div'
                      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 0.5, px: 0.5 }}>
                      <Typography
                        variant='body1'
                        color='text.primary'
                        sx={{
                          fontSize: '12px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <img src={vegIcon} alt='veg' style={{ width: '14px', height: '14px' }} />
                        2x {card.menuItem2}
                      </Typography>
                      <Typography
                        variant='body1'
                        color='text.primary'
                        sx={{
                          fontSize: '12px',
                        }}>
                        &#8377; {card.price2}
                      </Typography>
                    </Box>
                    <Typography variant='body2' color='text.primary' sx={{ my: 0.5, px: 0.5, fontSize: '10px' }}>
                      {card.option2}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.primary'
                      sx={{ my: 0.5, px: 0.5, fontSize: '10px', color: '#7b7b7b' }}>
                      Add ons - {card.addOns2}
                    </Typography>
                  </Box>
                  <Divider sx={{ backgroundColor: '#e4e4e4', width: '95%', m: 'auto', opacity: 0.4 }} />
                  <Box>
                    <Box
                      component='div'
                      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 0.5, px: 0.5 }}>
                      <Typography
                        variant='body1'
                        color='text.primary'
                        sx={{
                          fontSize: '12px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <img src={nonVegIcon} alt='veg' style={{ width: '14px', height: '14px' }} />
                        2x {card.menuItem3}
                      </Typography>
                      <Typography
                        variant='body1'
                        color='text.primary'
                        sx={{
                          fontSize: '12px',
                        }}>
                        &#8377; {card.price3}
                      </Typography>
                    </Box>
                    <Typography variant='body2' color='text.primary' sx={{ my: 0.5, px: 0.5, fontSize: '10px' }}>
                      {card.option3}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.primary'
                      sx={{ my: 0.5, px: 0.5, fontSize: '10px', color: '7b7b7b' }}>
                      Add ons - {card.addOns3}
                    </Typography>
                  </Box>
                  <Divider sx={{ backgroundColor: '#e4e4e4', width: '95%', m: 'auto', opacity: 0.4 }} />
                  <Box>
                    <Box
                      component='div'
                      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 0.5, px: 0.5 }}>
                      <Typography
                        variant='body1'
                        color='text.primary'
                        sx={{
                          fontSize: '12px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <img src={nonVegIcon} alt='veg' style={{ width: '14px', height: '14px' }} />
                        2x {card.menuItem4}
                      </Typography>
                      <Typography
                        variant='body1'
                        color='text.primary'
                        sx={{
                          fontSize: '12px',
                        }}>
                        &#8377; {card.price4}
                      </Typography>
                    </Box>
                    <Typography variant='body2' color='text.primary' sx={{ my: 0.5, px: 0.5, fontSize: '10px' }}>
                      {card.option4}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.primary'
                      sx={{ my: 0.5, px: 0.5, fontSize: '10px', color: '#7b7b7b' }}>
                      Add ons - {card.addOns4}
                    </Typography>
                  </Box>

                  <Box component='div' sx={{ p: 0.5, display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                    <Button
                      variant='outlined'
                      sx={{ width: '100%', height: '20px', fontSize: '10px', textTransform: 'capitalize' }}>
                      View All Items
                    </Button>
                  </Box>

                  <Box>
                    <Box
                      component='div'
                      sx={{ p: 0.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography
                        variant='body2'
                        color='text.primary'
                        sx={{ p: 0.5, fontSize: '7px', backgroundColor: '#ececec', color: '#a0a0a0' }}>
                        Instr - {card.instruction}
                      </Typography>
                      <Typography variant='body2' sx={{ p: 0.5, fontSize: '10px', color: '#bdbdbd' }}>
                        &#8377; {card.total}
                      </Typography>
                    </Box>
                    <Box component='div' sx={{ p: 0.5, display: 'flex', justifyContent: 'space-between' }}>
                      <Typography
                        variant='body2'
                        color='text.primary'
                        sx={{ p: 0.5, fontSize: '12px', color: '#a0a0a0' }}>
                        Taxes
                      </Typography>
                      <Typography
                        variant='body2'
                        color='text.primary'
                        sx={{ p: 0.5, fontSize: '10px', color: '#a0a0a0' }}>
                        &#8377; {card.taxes}
                      </Typography>
                    </Box>
                    <Box component='div' sx={{ p: 0.5, display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant='body1' color='text.primary' sx={{ p: 0.5, fontSize: '12px' }}>
                        Total Bill
                      </Typography>
                      <Typography variant='body1' color='text.primary' sx={{ p: 0.5, fontSize: '12px' }}>
                        <b>&#8377; {card.totalBill}</b>
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Box>
                <Stack spacing={1} direction='row' sx={{ my: 1, justifyContent: 'space-between' }}>
                  <Button
                    color='error'
                    size='small'
                    sx={{
                      width: '40%',
                      fontSize: '10px',
                      textTransform: 'capitalize',
                      border: '1px solid #e10000',
                      backgroundColor: '#ffcaca',
                      color: '#9e7d7d',
                    }}
                    variant='contained'>
                    Reject
                  </Button>
                  <Button
                    size='small'
                    sx={{ width: '60%', fontSize: '10px', textTransform: 'capitalize', backgroundColor: '#0ed60e' }}
                    variant='contained'
                    color='success'>
                    Accept Order
                  </Button>
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CardComponent;
