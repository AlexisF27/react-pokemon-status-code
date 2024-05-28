import { Box, Typography } from "@mui/material"

import PropTypes from 'prop-types';

function StatusCodeDetailTypography({ statusCodeId, statusCodeTitle }) {
  console.log(statusCodeTitle);
  return (
    <>
      <Box>
        <Box className='text-9xl font-bold'>
          {statusCodeId}
        </Box>
        <Box className='text-7xl '>
          {statusCodeTitle}
        </Box>
        <Box
          className="flex justify-between items-center p-2 w-auto border-solid border-2 border-stone-400 bg-slate-900"
        >
          <Typography
            className="text-white mb-4"
            // ref={textRef}
          >
            https://http.pokemon/{statusCodeId}.jpg

          </Typography>
          {/* <IconButton onClick={handleCopyClick} >
            <ContentCopyIcon className="text-white" />
          </IconButton> */}
        </Box>
      </Box>
    </>
  )
}

StatusCodeDetailTypography.propTypes = {
  statusCodeId: PropTypes.string.isRequired,
  statusCodeTitle: PropTypes.string,
};

export default StatusCodeDetailTypography