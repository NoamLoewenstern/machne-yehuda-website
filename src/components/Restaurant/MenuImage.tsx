import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getRestaurantByName } from '../../data/restaurants-info';

function MenuImage() {
  const { restaurantName = '' } = useParams();
  const restaurant = useMemo(() => getRestaurantByName(restaurantName), [restaurantName]);
  const menuImages = restaurant?.static.menuUrls || [];

  if (!menuImages.length) return <Navigate to={`/${restaurant?.name}` || '/'} />;
  return (
    <div className='Menu-Images'>
      {menuImages.map(menuUrl => (
        <img key={menuUrl} src={menuUrl} />
      ))}
    </div>
  );
}

export default MenuImage;
