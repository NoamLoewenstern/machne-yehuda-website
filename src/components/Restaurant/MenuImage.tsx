import { useMemo } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { getRestaurantByName } from '../../data/restaurants-info';

function MenuImage() {
  const [searchParams] = useSearchParams();
  const restaurantName = searchParams.get('restaurantName') || '';

  const restaurant = useMemo(() => getRestaurantByName(restaurantName), [restaurantName]);
  const menuImages = restaurant?.static.menuUrls || [];

  if (!restaurantName || !restaurant || !menuImages.length) {
    return <Navigate to='/' replace />;
  }

  return (
    <div className='Menu-Images'>
      {menuImages.map(menuUrl => (
        <img key={menuUrl} src={menuUrl} />
      ))}
    </div>
  );
}

export default MenuImage;
