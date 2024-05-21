import { Box, IconButton, Typography } from '@mui/material';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function LinkCode() {
  return (
    <Box className="flex justify-center pt-10 items-center">
      <Box
        className="flex justify-between items-center p-2 w-2/4 border-solid border-2 border-stone-400 bg-slate-900"
      >
        <Typography
        className="text-white mb-4"
        >
        https://http.dog/[code].jpg

        </Typography>
        <IconButton >
          <ContentCopyIcon className="text-white" />
        </IconButton>
      </Box>


    </Box>
  )
}

export default LinkCode