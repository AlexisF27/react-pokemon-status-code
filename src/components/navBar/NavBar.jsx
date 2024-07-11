import { Box, Typography } from '@mui/material';

function NavBar() {
  return (
    <Box>
      <header className="flex flex-row items-start justify-between grow-2 flex-wrap pb-2 pt-4 bage_backgroundColor border-b-4 border-b-border-rgba">
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
