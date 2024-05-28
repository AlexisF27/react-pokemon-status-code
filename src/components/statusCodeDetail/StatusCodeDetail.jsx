import { useLocation, useParams } from 'react-router-dom';

import { Box } from "@mui/material"
import StatusCodeDetailTypography from '../statusCodeDetailTypography/StatusCodeDetailTypography';

function StatusCodeDetail() {
  const { statusCodeId } = useParams();
  const location = useLocation();
  const { img } = location.state || {}
  return (
    <>
    <Box className="flex justify-center items-center">
      <img src={img} alt="hpjaçs" />
      <StatusCodeDetailTypography statusCodeId={statusCodeId}/>
    </Box>

    </>
  )
}

export default StatusCodeDetail