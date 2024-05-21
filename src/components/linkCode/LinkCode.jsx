import { Box, IconButton, TextField } from '@mui/material';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function LinkCode() {
  return (
    <Box className="flex justify-center pt-10 items-center">
      <TextField
        InputProps={{
          readOnly: false,
        }}
        label="Dogs for every HyperText Transfer Protocol response status code."
        className="w-3/4 ml-2.5"
        defaultValue="https://http.dog/[code].jpg"
        type='search'
      >

      </TextField>
      <Box className="pl-4">
        <IconButton>
          <ContentCopyIcon />
        </IconButton>

      </Box>

    </Box>
  )
}

export default LinkCode