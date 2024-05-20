import './navBar.css';
import '@fontsource/roboto';

import { Box, Typography } from '@mui/material';

function NavBar() {
  return (
    <header className="flex flex-row items-center justify-center grow-2 flex-wrap">
      <img
        id="img-logo"
        className="brightness"
        src="https://elcandelerotecnologico.com/wp-content/uploads/2017/03/juegos_logo_pokemon.jpg"
        alt="logo"
      ></img>
      <Box className="flex flex-row">
        <Typography variant="h2" style={{ fontFamily: 'Roboto' }} className="roboto-font ">HTTP POKEMON</Typography>
      </Box>
    </header>
  );
}

export default NavBar;
