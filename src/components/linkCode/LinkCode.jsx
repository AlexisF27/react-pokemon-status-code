import { Box, IconButton } from '@mui/material';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function LinkCode() {
  return (
    <Box className="flex justify-center pt-10 items-center">
      <Box
      className="flex justify-between items-center w-2/4"
        // InputProps={{
        //   readOnly: true,
        // }}
        // className="w-3/4 ml-2.5"
        // defaultValue="https://http.dog/[code].jpg"
        // type='search'
      >
        https://http.dog/[code].jpg
        <IconButton>
          <ContentCopyIcon />
        </IconButton>
      </Box>


    </Box>
  )
}

export default LinkCode