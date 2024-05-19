import './linkCode.css';

import { Box, IconButton, TextField } from '@mui/material';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function LinkCode() {
  return (
    <Box className="link-code-bar">
      <TextField
        InputProps={{
          readOnly: false,
        }}
        label="Dogs for every HyperText Transfer Protocol response status code."
        className="copy-code"
        defaultValue="https://http.dog/[code].jpg"
        type='search'
      >

      </TextField>
        <IconButton>
          <ContentCopyIcon />
        </IconButton>

    </Box>
  )
}

export default LinkCode