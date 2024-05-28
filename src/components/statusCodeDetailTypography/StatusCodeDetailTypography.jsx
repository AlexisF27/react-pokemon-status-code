import PropTypes from 'prop-types';
import { Typography } from "@mui/material"

function StatusCodeDetailTypography({statusCodeId}) {
  return (
    <>
      <Typography>
        The Status Code is {statusCodeId}
      </Typography>
    </>
  )
}

StatusCodeDetailTypography.propTypes = {
  statusCodeId: PropTypes.string.isRequired,
};

export default StatusCodeDetailTypography