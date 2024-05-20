import { Box, Button, TextField } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box className="flex flex-col">

      <Box className="flex justify-center items-center grow-0 pt-10">
        <TextField
          InputProps={{
            readOnly: false,
          }}
          className="w-3/4 ml-2.5"
          defaultValue="https://http.dog/[code].jpg"
          type='search'
        />
        <Box className="pl-4">
          <Button
            className='m-10 border-x'
            variant="contained"
          >
            <SearchIcon />
            Search Code
          </Button>
        </Box>

      </Box>
    </Box>
  );
};

export default SearchBar;
