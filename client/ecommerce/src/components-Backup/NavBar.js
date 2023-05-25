import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar className='navBar' style = {{paddingRight: 30, paddingLeft: 30}}>
          <Typography variant="h6" style={{ flexGrow: 1}} href="/">
            SidewalkSwagger
          </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/product">
          Product
        </Button>
        <Button color="inherit" component={Link} to="/account">
          Account
        </Button>
        <Button color="inherit" component={Link} to="/carts">
          <ShoppingCartIcon/>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
