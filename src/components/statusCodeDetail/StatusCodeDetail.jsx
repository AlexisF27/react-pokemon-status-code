import { useLocation, useParams } from 'react-router-dom';

import { Box } from "@mui/material"
import ButtonsAfterBeforeStatusCode from '../buttonsAfterBeforeStatusCode/ButtonsAfterBeforeStatusCode';
import StatusCodeDetailTypography from '../statusCodeDetailTypography/StatusCodeDetailTypography';

function StatusCodeDetail() {
  const { statusCodeId } = useParams();
  const location = useLocation();
  const { img, statusCodeTitle } = location.state || {};
  console.log(statusCodeTitle);

  return (
    <>
      <Box className="flex justify-center items-center pt-12">
        <Box className="w-2/5 h-2/5">
          <img src={img} alt="status code" />
          <Box className="flex justify-center pt-2">
            <ButtonsAfterBeforeStatusCode/>
          </Box>
        </Box>
        <Box className="pl-16 w-2/5">
          <StatusCodeDetailTypography statusCodeId={statusCodeId} statusCodeTitle={statusCodeTitle} />
        </Box>
      </Box>

    </>
  )
}
export default StatusCodeDetail