import './navBar.css';
import '@fontsource/roboto';

import { Box, Typography } from '@mui/material';

function NavBar() {
  return (
    <header id="header">
      <Box className="box-img-title">
        <img
          id="img-logo"
          className="brightness"
          src="https://elcandelerotecnologico.com/wp-content/uploads/2017/03/juegos_logo_pokemon.jpg"
          alt="logo"
        ></img>
        <Typography variant="h2" style={{ fontFamily: 'Roboto' }} className="roboto-font underline-color title">HTTP POKEMON</Typography>
      </Box>
      <Typography variant="h5" style={{ fontFamily: 'Roboto' }} className="roboto-font normal-weight description">Dogs for every HyperText Transfer Protocol response status code.</Typography>
    </header>
  );
}

export default NavBar;
