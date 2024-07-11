import { Box, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../searchBar/SearchBar';

function NavBar({ setInputSearch }) {
  const handleSearch = (pokemonStatusCode) => {
    setInputSearch(pokemonStatusCode);
  };
  return (
    <Box>
      <header className="flex flex-row items-start justify-between grow-2 flex-wrap pb-2 pt-4 bage_backgroundColor border-b-4 border-b-border-rgba">
        <Link to="/">
          <button>
            <img
              className="h-20 w-30 pr-10 pl-10"
              src="/assets/img/Pokeball-27.png"
              alt="logo"
            />
          </button>
        </Link>
        <Box className="flex flex-row">
          <Typography variant="h2">HTTP POKEMON</Typography>
        </Box>
        <SearchBar handleSearch={handleSearch} />
      </header>
    </Box>
  );
}
NavBar.propTypes = {
  inputSearch: PropTypes.string,
  setInputSearch: PropTypes.func,
};

export default NavBar;
