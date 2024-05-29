import { Box, Typography } from "@mui/material"

import PropTypes from 'prop-types';

function LinkCodeStatusCode({statusCodeId, extensionString, linkTo}) {
  return (
    <>
    <Box className="pt-8">
      <Typography>
        Link to {linkTo}
      </Typography>

      <Box
        className="flex mt-2 p-4 justify-between items-center p-2 w-auto border-solid border-2 border-stone-400 bg-slate-900"
      >
        <Typography
          className="text-white mb-4"
        >
          https://http.pokemon/{statusCodeId}{extensionString}
        </Typography>
      </Box>

    </Box>

    </>
  )
}

LinkCodeStatusCode.propTypes = {
  statusCodeId: PropTypes.string.isRequired,
  extensionString: PropTypes.string,
  linkTo: PropTypes.string,
};

export default LinkCodeStatusCode