import './searchBar.css';

import { Box, Button, TextField } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box className="searchBar">
      <TextField
        InputProps={{
          readOnly: false,
        }}
        className="copy-code"
        defaultValue="https://http.dog/[code].jpg"
        type="search"
      />
      <Button
        variant="contained"
      >
        <SearchIcon>

          Disable elevation
        </SearchIcon>
      </Button>
    </Box>
  );
};

export default SearchBar;
