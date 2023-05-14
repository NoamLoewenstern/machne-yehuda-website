import store from './store/store';
import { Provider } from 'react-redux';

import './App.scss';
import SearchFood from './components/SearchRestaurant/SearchFood';
import { CacheProvider } from '@emotion/react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { cacheRtl, theme } from './Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurant from './components/Restaurant/Restaurant';
import MenuImage from './components/Restaurant/MenuImage';
import { BaseURLPath } from './utils/config';

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className='App' dir='rtl'>
          <Provider store={store}>
            <BrowserRouter basename={BaseURLPath}>
              <Routes>
                <Route path='/' element={<SearchFood />} />
                <Route path='/menus/:restaurantName' element={<MenuImage />} />
                <Route path='/:restaurantName' element={<Restaurant />} />
              </Routes>
            </BrowserRouter>
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
