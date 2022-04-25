import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ direction: 'rtl' }}>
      <AppBar className='nav-bar' position='static'>
        <Toolbar>
          {/* <IconButton size='large' edge='start' color='inherit'  sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Logo />
          {/* <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          {/* <Button color='inherit'>Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
