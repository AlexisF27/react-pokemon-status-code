import { Box, Typography } from '@mui/material';

function NavBar() {
  return (
    <header className="flex flex-row items-start justify-center grow-2 flex-wrap pb-6 pt-6 border-b-2 bg-yellow-500">
      <img
        className="h-20 w-30 pr-10"
        src="https://elcandelerotecnologico.com/wp-content/uploads/2017/03/juegos_logo_pokemon.jpg"
        alt="logo"
      ></img>
      <Box className="flex flex-row">
        <Typography variant="h2" >HTTP POKEMON</Typography>
      </Box>
    </header>
  );
}

export default NavBar;
