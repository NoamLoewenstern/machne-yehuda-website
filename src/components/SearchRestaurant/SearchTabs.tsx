import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

import { RestaurantCategories, WeekDays } from '../../data/restaurants-info';
import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  editPriceRange,
  resetPriceRange,
  resetSearchFilters,
  selectCategory,
  selectSearch,
  setTime,
  toggleJustKosher,
  unselectCategory,
} from '../../store/slices/searchSlice';
import FormControl from '@mui/material/FormControl';

export const categoriesTypes: { type: RestaurantCategories; label: string }[] = [
  { type: RestaurantCategories.Resturants, label: 'מסעדות' },
  { type: RestaurantCategories.Bars, label: 'ברים' },
  { type: RestaurantCategories.Bastot, label: 'בסטות' },
  { type: RestaurantCategories.Sweets, label: 'מתוקים' },
  { type: RestaurantCategories.Other, label: 'אחר' },
];

export function CategoriesFilter() {
  const { categories } = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();

  return (
    <FormGroup>
      {categoriesTypes.map(category => {
        const isSelected = categories.some(selectedCategory => category.type === selectedCategory);
        const handleOnChange = (_: any, checked: boolean) =>
          dispatch((checked ? selectCategory : unselectCategory)(category.type));
        return (
          <FormControlLabel
            key={category.type}
            control={<Checkbox />}
            checked={isSelected}
            label={category.label}
            onChange={handleOnChange}
          />
        );
      })}
    </FormGroup>
  );
}
export function KosherFilter() {
  const { justKosher } = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={justKosher} onChange={() => dispatch(toggleJustKosher())} />}
        label='רק כשר'
      />
    </FormGroup>
  );
}
export function PriceRangeFilter() {
  const { priceRange } = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();

  return (
    <FormGroup dir='rtl'>
      <TextField
        dir='rtl'
        fullWidth={false}
        size='medium'
        sx={{ width: 100 }}
        label='מ-'
        type='number'
        value={priceRange?.from || ''}
        onChange={e => dispatch(editPriceRange({ from: +e.target.value }))}
        variant='filled'
      />
      <TextField
        fullWidth={false}
        sx={{ width: 100 }}
        label='עד-'
        type='number'
        value={priceRange?.till || ''}
        onChange={e => dispatch(editPriceRange({ till: +e.target.value }))}
        variant='filled'
      />
      <Button variant='outlined' sx={{ width: 100, fontSize: 16 }} onClick={() => dispatch(resetPriceRange())}>
        אפס
      </Button>
    </FormGroup>
  );
}
export function TimeFilter() {
  const { time } = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();

  const [dateHour, setDateHour] = useState<Date | null>(null);

  const handleSetDayOfWeek = e => {
    const newWeekDay = +(e.target.value as string) as WeekDays;
    dispatch(setTime({ day: newWeekDay }));
  };
  const handleSetTimeInDay = (newDate: Date | null) => {
    if (newDate) {
      setDateHour(newDate);
      const newHour = `${newDate.getHours() < 10 ? '0' : ''}${newDate.getHours()}:${
        newDate.getMinutes() < 10 ? '0' : ''
      }${newDate.getMinutes()}`;
      dispatch(setTime({ hour: newHour }));
    }
  };
  return (
    <FormControl dir='rtl' variant='outlined'>
      <Stack spacing={1}>
        <InputLabel id='pick-day-filter-label'>יום</InputLabel>
        <Select
          labelId='pick-day-filter-label'
          // id='pick-day-filter'
          value={time?.day || ''}
          label='בחר יום'
          onChange={handleSetDayOfWeek}
        >
          <MenuItem value={1}>ראשון</MenuItem>
          <MenuItem value={2}>שני</MenuItem>
          <MenuItem value={3}>שלישי</MenuItem>
          <MenuItem value={4}>רביעי</MenuItem>
          <MenuItem value={5}>חמישי</MenuItem>
          <MenuItem value={6}>שישי</MenuItem>
          <MenuItem value={7}>שבת</MenuItem>
        </Select>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileTimePicker
            ampm={false}
            label='בחר שעה'
            value={dateHour}
            onChange={handleSetTimeInDay}
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Stack>
    </FormControl>
  );
}
