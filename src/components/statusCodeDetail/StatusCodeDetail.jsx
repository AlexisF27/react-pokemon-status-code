import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Box } from "@mui/material"
import ButtonsAfterBeforeStatusCode from '../buttonsAfterBeforeStatusCode/ButtonsAfterBeforeStatusCode';
import StatusCodeDetailTypography from '../statusCodeDetailTypography/StatusCodeDetailTypography';
import statusCodes from '../../assets/data/status_code_pokemon.json';

function StatusCodeDetail() {
  const { statusCodeId } = useParams();
  const location = useLocation();
  const { img, statusCodeTitle } = location.state || {};
  const  [singularPokemonStatusDetail, setSingularPokemonStatusDetail] = useState("");

  useEffect(() => {
    const singularPokemonStatusDetail = Object.values(statusCodes).find(statusCode => statusCode.status_code_id === parseInt(statusCodeId));
    setSingularPokemonStatusDetail(singularPokemonStatusDetail);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(singularPokemonStatusDetail);
  return (
    <>
      <Box className="flex justify-center items-center pt-12">
        <Box className="w-2/5 h-2/5">
          <img src={singularPokemonStatusDetail.img_status_code || img} alt="status code" />
          <Box className="flex justify-center pt-2">
            <ButtonsAfterBeforeStatusCode/>
          </Box>
        </Box>
        <Box className="pl-16 w-2/5">
          <StatusCodeDetailTypography statusCodeId={singularPokemonStatusDetail.status_code_id || statusCodeId} statusCodeTitle={singularPokemonStatusDetail.title || statusCodeTitle} />
        </Box>
      </Box>

    </>
  )
}
export default StatusCodeDetail