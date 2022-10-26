import {
  Box, IconButton, Toolbar, Typography,
} from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      sx={{
        marginTop: 'calc(10% + 60px)',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Toolbar>
        <Typography variant="h5" component="span">
          Footer Test - Home Decor
        </Typography>
        <IconButton color="warning">
          <ShoppingBasket />
        </IconButton>
      </Toolbar>
    </Box>
  );
}

export default Footer;
