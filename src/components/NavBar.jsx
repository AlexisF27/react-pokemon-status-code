import './navBar.css';
import '@fontsource/roboto';

import { Box, Typography } from '@mui/material';

function NavBar() {
  return (
    <header id="header">
      <img
        id="img-logo"
        className="brightness"
        src="https://elcandelerotecnologico.com/wp-content/uploads/2017/03/juegos_logo_pokemon.jpg"
        alt="logo"
      ></img>
      <Box className="box-img-title">

        <Typography variant="h2" style={{ fontFamily: 'Roboto' }} className="roboto-font underline-color title">HTTP POKEMON</Typography>
      </Box>
    </header>
  );
}

export default NavBar;
