import { Box, Typography } from '@mui/material';

function NavBar() {
  return (
    <Box>
      <header className="flex flex-row items-start justify-center grow-2 flex-wrap pb-2 pt-4 border-b-2 bage_backgroundColor">
        <img
          className="h-20 w-30 pr-10"
          src="https://elcandelerotecnologico.com/wp-content/uploads/2017/03/juegos_logo_pokemon.jpg"
          alt="logo"></img>
        <Box className="flex flex-row">
          <Typography variant="h2">HTTP POKEMON</Typography>
        </Box>
      </header>
    </Box>
  );
}

export default NavBar;
