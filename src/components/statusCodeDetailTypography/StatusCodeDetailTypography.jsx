import { Box } from "@mui/material"
import PropTypes from 'prop-types';

function StatusCodeDetailTypography({ statusCodeId, statusCodeTitle }) {
  console.log(statusCodeTitle);
  return (
    <>
      <Box>
        <Box className='text-9xl font-bold'>
          {statusCodeId}
        </Box>
        <Box className='text-8xl font-bold'>
          {statusCodeTitle}
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