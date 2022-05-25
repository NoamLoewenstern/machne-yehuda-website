import Box from '@mui/material/Box';
import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getRestaurantByName, weekDaysInHebrew } from '../../data/restaurants-info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RestaurantCategories } from '../../data/restaurants-info';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { veganChipColorCalc } from '../SearchRestaurant/RestaurantCard';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Logo from '../Logo';

const RestaurantToHebrew = {
  [RestaurantCategories.Resturants]: 'מסעדה',
  [RestaurantCategories.Bastot]: 'בסטה',
  [RestaurantCategories.Bars]: 'בר',
  [RestaurantCategories.Sweets]: 'מתוקים',
  [RestaurantCategories.Other]: '',
};

function Restaurant() {
  const { restaurantName = '' } = useParams();

  const restaurant = useMemo(() => getRestaurantByName(restaurantName), [restaurantName]);

  // const backgroundImages = restaurant?.static.imagesUrl.map(url => `url("${url}")`).join(', ');
  const url = restaurant?.static.imagesUrl[0];
  const backgroundImage = `url("${url}")`;

  if (!restaurant) return <Navigate to='/' replace />;

  return (
    <>
      <header className='App-header' style={{ backgroundImage }}>
        <Logo />

        <img height={100} src={restaurant?.static.logoUrl} className='Resturant-Logo-Img' alt='logo' />

        <Box className='Restaurant-Page'>
          <Paper variant='outlined' className='Restaurant-Page-Content' elevation={16}>
            <Typography gutterBottom variant='h2' color='primary'>
              {restaurantName}
            </Typography>
            <Card>
              <CardMedia
                component='img'
                alt={restaurant.name}
                height={350}
                // width='500'
                image={restaurant.static.imagesUrl[1] || restaurant.static.imagesUrl[0]}
              />

              <CardContent>
                <Stack marginBottom={2} direction='row' spacing={1}>
                  <Chip
                    color='primary'
                    label={restaurant.isKosher ? 'כשר' : 'לא כשר'}
                    sx={{ fontSize: 20, color: 'white' }}
                  />
                  {restaurant.veganType && (
                    <Chip
                      sx={{
                        backgroundColor: veganChipColorCalc(restaurant.veganType),
                        fontSize: 20,
                        color: 'white',
                      }}
                      label={restaurant.veganType}
                    />
                  )}
                </Stack>

                <Typography gutterBottom variant='h5' color='text.primary'>
                  מחיר ממוצע: {restaurant.priceRange.avg}
                </Typography>
                <Divider variant='fullWidth' textAlign='left' sx={{ mt: 2, mb: 0, fontSize: 20, color: '#4d6cea' }}>
                  שעות פתיחה
                </Divider>
                <TableContainer component={Paper}>
                  <Table size='small'>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align='right'>פתיחה</TableCell>
                        <TableCell align='right'>סגירה</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.entries(restaurant.openHours)
                        .sort((a, b) => +a[0] - +b[0])
                        .map(([dayNum, openHours]) => (
                          <TableRow key={dayNum} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component='th' scope='row'>
                              {weekDaysInHebrew[dayNum]}
                            </TableCell>
                            {openHours === 'Closed' ? (
                              <>
                                <TableCell align='right'>סגור</TableCell>
                                <TableCell align='right'>סגור</TableCell>
                              </>
                            ) : (
                              <>
                                <TableCell align='right'>{openHours.from}</TableCell>
                                <TableCell align='right'>{openHours.till}</TableCell>
                              </>
                            )}
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Divider variant='fullWidth' textAlign='left' sx={{ mt: 4, mb: 1, fontSize: 20, color: '#4d6cea' }}>
                  כתובת
                </Divider>
                <Typography variant='body1' color='text.primary'>
                  {`${restaurant.address.street} ${restaurant.address.number || ''}`}
                </Typography>
              </CardContent>

              <CardActions>
                {(restaurant?.static.menuUrls?.length || 0) > 0 && (
                  <Button size='large' href={`/menus/${restaurant.name}`} target='_blank'>
                    תפריט
                  </Button>
                )}

                {restaurant.website?.url ? (
                  <Button size='large' href={restaurant.website.url} target='_blank'>
                    לאתר המסעדה
                  </Button>
                ) : null}
              </CardActions>
            </Card>
          </Paper>
        </Box>
      </header>
    </>
  );
}

export default Restaurant;
