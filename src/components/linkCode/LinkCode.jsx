import { Box, Button, TextField } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

function LinkCode() {
  return (
    <Box className="search-bar">
    <TextField
      InputProps={{
        readOnly: false,
      }}
      label="Dogs for every HyperText Transfer Protocol response status code."
      className="copy-code"
      defaultValue="https://http.dog/[code].jpg"
      type='search'
    />

    <Button
      variant="contained"
    >
      <SearchIcon className='img-search' />
      Search Code
    </Button>
  </Box>
  )
}

export default LinkCode