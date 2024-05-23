import './App.css'

import { Box } from '@mui/material';
import LinkCode from './components/linkCode/LinkCode'
import NavBar from './components/navBar/NavBar'
import NotePad from './components/notePad/NotePad';
import SearchBar from './components/searchBar/SearchBar'
import { ThemeProvider } from '@mui/material/styles';
import Title from './components/title/Title'
import fondTheme from './themes/FontTheme';
import { useState } from 'react';

function App() {

  const [inputSearch, setInputSearch] = useState('');

  const handleSearch = (pokemonStatusCode) => {
    setInputSearch(pokemonStatusCode);
  };

  return (
    <ThemeProvider theme={fondTheme} >
      <NavBar />
      <Box className="absolute top-0 end-0">
        <SearchBar handleSearch={handleSearch} />
      </Box>

      <Title />
      <LinkCode />
      <NotePad inputSearch={inputSearch}/>
    </ThemeProvider>
  )
}

export default App
