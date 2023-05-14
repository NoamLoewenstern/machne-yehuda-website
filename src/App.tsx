import store from './store/store';
import { Provider } from 'react-redux';

import './App.scss';
import SearchFood from './components/SearchRestaurant/SearchFood';
import { CacheProvider } from '@emotion/react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { cacheRtl, theme } from './Theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Restaurant from './components/Restaurant/Restaurant';
import MenuImage from './components/Restaurant/MenuImage';
import { baseURLName } from './utils/config';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SearchFood />,
    },
    {
      path: '/:restaurantName',
      element: <Restaurant />,
    },
    {
      path: '/menus/:restaurantName',
      element: <MenuImage />,
    },
  ],
  { basename: baseURLName },
);

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className='App' dir='rtl'>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
function createBrowserHistory(arg0: { basename: string }) {
  throw new Error('Function not implemented.');
}
