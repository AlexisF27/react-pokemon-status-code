import { Box, TextField } from '@mui/material';

const SearchBar = () => {
  return (
    <Box className="flex flex-col">

      <Box className="flex justify-center items-center pt-10">
        <TextField
          InputProps={{
            readOnly: false,
          }}
          className="w-3/4 ml-2.5"
          defaultValue="https://http.dog/[code].jpg"
          type='search'
        />

      </Box>
    </Box>
  );
};

export default SearchBar;
