import { Box } from '@mui/material';
import LinkCode from '../linkCode/LinkCode';
import NotePad from '../notePad/NotePad';
import PropTypes from 'prop-types'
import SearchBar from '../searchBar/SearchBar'
import Title from '../title/Title';

function Home({ inputSearch, setInputSearch }) {
  const handleSearch = (pokemonStatusCode) => {
    setInputSearch(pokemonStatusCode);
  };

  return (
    <>
      <Box className="absolute top-0 end-0">
        <SearchBar handleSearch={handleSearch} />
      </Box>
      <Title />
      <LinkCode />
      <NotePad inputSearch={inputSearch} />
    </>
  )
}

Home.propTypes = {
  inputSearch: PropTypes.string,
  setInputSearch: PropTypes.func,
}

export default Home