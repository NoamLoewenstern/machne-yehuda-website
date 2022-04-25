import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import { useEffect, useMemo, useRef, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { CategoriesFilter, KosherFilter, PriceRangeFilter, TimeFilter } from './SearchTabs';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetSearchFilters, selectSearch } from '../../store/slices/searchSlice';
import RestaurantCard from './RestaurantCard';
import Logo from '../Logo';
import { restaurantsDataInfo } from '../../data/restaurants-info';
import { isHourGreaterThan, isHourSameAs } from '../../utils/helpers';

enum FILTERS_TYPE {
  CATEGORY = 'CATEGORY',
  KOSHER = 'KOSHER',
  PRICE_RANGE = 'PRICE_RANGE',
  TIME = 'TIME',
}

const TabPanel = ({ focusedFilter }: { focusedFilter?: FILTERS_TYPE } = {}) => {
  const TabFilter = {
    [FILTERS_TYPE.CATEGORY]: CategoriesFilter,
    [FILTERS_TYPE.KOSHER]: KosherFilter,
    [FILTERS_TYPE.PRICE_RANGE]: PriceRangeFilter,
    [FILTERS_TYPE.TIME]: TimeFilter,
    null: () => null,
  }[focusedFilter || 'null'];
  return (
    <>
      <div hidden={!!focusedFilter}>סנן מקומות לפי העדפותיך</div>
      <TabFilter />
    </>
  );
};

export default function SearchFood() {
  const [curFilter, setCurFilter] = useState<FILTERS_TYPE | undefined>(undefined);
  const dispatch = useAppDispatch();
  const searchFilters = useAppSelector(selectSearch);

  const [viewingRestaurants, setViewingRestaurants] = useState(restaurantsDataInfo);

  const onSearchHandler = () => {
    let filteredRestaurants = restaurantsDataInfo;

    if (searchFilters.categories.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(res => searchFilters.categories.includes(res.type));
    }
    if (searchFilters.justKosher) {
      filteredRestaurants = filteredRestaurants.filter(res => res.isKosher);
    }
    if (searchFilters.priceRange?.from) {
      filteredRestaurants = filteredRestaurants.filter(
        res =>
          res.priceRange.from >= searchFilters.priceRange?.from! ||
          res.priceRange.till >= searchFilters.priceRange?.from!,
      );
    }
    if (searchFilters.priceRange?.till) {
      filteredRestaurants = filteredRestaurants.filter(res => res.priceRange.from <= searchFilters.priceRange?.till!);
    }
    if (searchFilters.time) {
      // Calculating the TIME for filter
      if (searchFilters.time?.day) {
        filteredRestaurants = filteredRestaurants.filter(res => res.openHours[searchFilters.time!.day!] !== 'Closed');
        const hour = searchFilters.time?.hour as string;
        const day = searchFilters.time?.day as number;

        if (hour) {
          filteredRestaurants = filteredRestaurants.filter(res => {
            const openHours = res.openHours[day!];
            if (openHours === 'Closed') return false;

            if (isHourSameAs(openHours.from, hour) || isHourSameAs(openHours.till, hour)) {
              return true;
            }

            if (hour.startsWith('0')) {
              if (!openHours.till.startsWith('0')) return false;
              return isHourGreaterThan(openHours.till, hour);
            }
            if (isHourGreaterThan(hour, openHours.from)) {
              if (openHours.till.startsWith('0')) {
                return true;
              }
              if (!isHourGreaterThan(openHours.till, hour)) {
                return false;
              }
            }
            return true;
          });
        }
      }
    }

    setViewingRestaurants(filteredRestaurants);
  };

  return (
    <header className='App-header'>
      <Logo />
      <div className='SearchFood-Container'>
        <Paper className='SearchFoodCard' style={viewingRestaurants.length ? {} : { width: '80%' }}>
          <Typography sx={{ m: 2, mb: 4, textAlign: 'center' }} variant='h2' color='primary'>
            לחפש, למצוא, לאכול, ליהנות!
          </Typography>
          <Box sx={{ minHeight: '250px' }}>
            <Tabs
              className='Tabs'
              value={curFilter}
              onChange={(_: any, newValue: FILTERS_TYPE) => setCurFilter(newValue)}
              textColor='primary'
              indicatorColor='primary'
            >
              <Tab className='Tab' value={FILTERS_TYPE.CATEGORY} label='קטגוריה' />
              <Tab className='Tab' value={FILTERS_TYPE.KOSHER} label='כשרות' />
              <Tab className='Tab' value={FILTERS_TYPE.PRICE_RANGE} label='טווח מחירים' />
              <Tab className='Tab' value={FILTERS_TYPE.TIME} label='שעות פתיחה' />
            </Tabs>
            <Box sx={{ pt: 2 }}>
              <TabPanel focusedFilter={curFilter} />
            </Box>
          </Box>
          <Box
            style={{
              alignSelf: 'start',
              display: 'flex',
              // justifyContent: 'space-between',
              marginTop: 10,
              width: '100%',
            }}
          >
            <Button variant='outlined' color='warning' sx={{ mr: 1 }} onClick={() => dispatch(resetSearchFilters())}>
              איפוס סינון
            </Button>
            <Button variant='contained' onClick={onSearchHandler} sx={{ mr: 1 }}>
              חפש
            </Button>
            <Typography sx={{ justifySelf: 'flex-end' }} variant='h6' color='primary'>
              {viewingRestaurants.length} תוצאות
            </Typography>
          </Box>
        </Paper>

        {viewingRestaurants.length > 0 && (
          <div className='List-RestaurantCards'>
            {viewingRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.name} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
