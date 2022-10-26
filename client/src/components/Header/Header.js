import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          component="span"
        >
          Header Test - Home Decor
        </Typography>

        <Navigation />
        <IconButton
          color="warning"
        >
          <ShoppingBasket />
        </IconButton>
      </Toolbar>

    </AppBar>
  );
}

export default Header;
