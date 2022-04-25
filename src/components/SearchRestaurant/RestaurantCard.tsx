import Card from '@mui/material/Card';
import { Link as RouterLink } from 'react-router-dom';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IRestaurantInfo, RestaurantCategories, restaurantsDataInfo } from '../../data/restaurants-info';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

const RestaurantToHebrew = {
  [RestaurantCategories.Resturants]: 'מסעדה',
  [RestaurantCategories.Bastot]: 'בסטה',
  [RestaurantCategories.Bars]: 'בר',
  [RestaurantCategories.Sweets]: 'מתוקים',
  [RestaurantCategories.Other]: '',
};

export const veganChipColorCalc = (type: IRestaurantInfo['veganType']) => {
  switch (type) {
    case 'בשרי':
      return '#fc8686';
    case 'טבעוני':
      return 'white';
    case 'צמחוני':
      return '#86fc86';
    default:
      return '';
  }
};

function RestaurantCard({ restaurant }: { restaurant: IRestaurantInfo }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 300, maxWidth: 600 }} className='Restaurant-Card'>
      <CardActionArea component={RouterLink} to={`/${restaurant.name}`}>
        <CardHeader
          avatar={<Avatar src={restaurant.static.logoUrl}></Avatar>}
          titleTypographyProps={{ variant: 'h5' }}
          title={restaurant.name}
          subheader={RestaurantToHebrew[restaurant.type]}
        />
        {restaurant.static.imagesUrl[0] ? (
          <CardMedia
            component='img'
            alt={restaurant.name}
            height='300'
            image={restaurant.static.imagesUrl[0]}
            sx={{ width: 550 }}
          />
        ) : null}

        <CardContent>
          <Stack marginBottom={2} direction='row' spacing={1}>
            <Chip color='primary' label={restaurant.isKosher ? 'כשר' : 'לא כשר'} sx={{ fontSize: 18 }} />
            {restaurant.veganType && (
              <Chip
                // color={}
                sx={{
                  backgroundColor: veganChipColorCalc(restaurant.veganType),
                  fontSize: 18,
                }}
                label={restaurant.veganType}
              />
            )}
          </Stack>
          <Typography variant='body1' color='text.primary'>
            מחיר ממוצע: {restaurant.priceRange.avg}
          </Typography>
          <Typography gutterBottom variant='body1' color='text.primary'>
            טווח מחירים: {restaurant.priceRange.from}-{restaurant.priceRange.till}
          </Typography>

          <Typography variant='body1' color='text.primary'>
            {`${restaurant.address.street} ${restaurant.address.number || ''}`}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size='large' onClick={() => navigate(`/${restaurant.name}`)}>
          פרטים
        </Button>
        {restaurant.website?.url ? <Button size='large'>לאתר המסעדה</Button> : ''}
      </CardActions>
    </Card>
  );
}

export default RestaurantCard;
