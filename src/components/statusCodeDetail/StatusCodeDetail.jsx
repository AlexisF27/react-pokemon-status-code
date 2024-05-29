import { useLocation, useParams } from 'react-router-dom';

import { Box } from "@mui/material"
import StatusCodeDetailTypography from '../statusCodeDetailTypography/StatusCodeDetailTypography';

function StatusCodeDetail() {
  const { statusCodeId } = useParams();
  const location = useLocation();
  const { img, statusCodeTitle } = location.state || {};
  console.log(statusCodeTitle);

  return (
    <>
      <Box className="flex justify-center items-center pt-12">
        <img src={img}  />
        <Box className="pl-16">
          <StatusCodeDetailTypography statusCodeId={statusCodeId} statusCodeTitle={statusCodeTitle} />
        </Box>
      </Box>

    </>
  )
}

export default StatusCodeDetail