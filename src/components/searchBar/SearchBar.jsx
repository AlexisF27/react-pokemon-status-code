import { Box, Input } from '@mui/material';

import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [pokemonStatusCodeQuery, setPokemonStatusCodeQuery] = useState('');
  const handleInputChange = (event) => {
    setPokemonStatusCodeQuery(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <Box className="flex flex-col">
      <Box className="flex justify-center items-center pt-10 pr-10">
        <Input
          className="w-3/4 ml-2.5"
          placeholder="Search"
          type="search"
          value={pokemonStatusCodeQuery}
          onChange={handleInputChange}
        />
        <SearchIcon />
      </Box>
    </Box>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
