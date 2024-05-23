import { Box, Input } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box className="flex flex-col">

      <Box className="flex justify-center items-center pt-10 pr-10">
        <Input
          className="w-3/4 ml-2.5"
          placeholder="Search"
          type='search'
        />  
        
        <SearchIcon/>
      </Box>
    </Box>
  );
};

export default SearchBar;
