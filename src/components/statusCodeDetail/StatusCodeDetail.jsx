import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import ButtonsAfterBeforeStatusCode from '../buttonsAfterBeforeStatusCode/ButtonsAfterBeforeStatusCode';
import StatusCodeDetailTypography from '../statusCodeDetailTypography/StatusCodeDetailTypography';
import statusCodes from '../../assets/data/status_code_pokemon.json';

function StatusCodeDetail() {
  const { statusCodeId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { img, statusCodeTitle } = location.state || {};
  const [singularPokemonStatusDetail, setSingularPokemonStatusDetail] = useState('');
  const [statusCodeIndex, setStatusCodeIndex] = useState(0);

  useEffect(() => {
    const singularPokemonStatusDetail = Object.values(statusCodes).find(
      (statusCode) => statusCode.status_code_id === parseInt(statusCodeId)
    );
    setSingularPokemonStatusDetail(singularPokemonStatusDetail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusCodeId]);

  useEffect(() => {
    const index = Object.values(statusCodes).findIndex(
      (statusCode) => statusCode.status_code_id === parseInt(statusCodeId)
    );
    setStatusCodeIndex(index);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusCodeIndex]);

  const handleNextStatusCode = () => {
    if (statusCodeIndex < Object.values(statusCodes).length - 1) {
      const nextIndex = statusCodeIndex + 1;
      const nextStatusCode = Object.values(statusCodes)[nextIndex];
      setStatusCodeIndex(nextIndex);
      navigate(`/${nextStatusCode.status_code_id}`, {
        state: {
          img: nextStatusCode.img_status_code,
          statusCodeTitle: nextStatusCode.title,
        },
      });
    }
  };
  const handlePreviousStatusCode = () => {
    if (statusCodeIndex > 0) {
      const nextIndex = statusCodeIndex - 1;
      const nextStatusCode = Object.values(statusCodes)[nextIndex];
      setStatusCodeIndex(nextIndex);
      navigate(`/${nextStatusCode.status_code_id}`, {
        state: {
          img: nextStatusCode.img_status_code,
          statusCodeTitle: nextStatusCode.title,
        },
      });
    }
  };

  return (
    <>
      <Box className="flex flex-col justify-center items-center pt-12">
        <Box className="w-2/5 h-2/5">
          <img
            src={singularPokemonStatusDetail.img_status_code || img}
            alt="status code"
          />
        </Box>
        <Box className="flex justify-center pt-2">
          <ButtonsAfterBeforeStatusCode
            handleNextStatusCode={handleNextStatusCode}
            handlePreviousStatusCode={handlePreviousStatusCode}
            isFirst={statusCodeIndex === 0}
            isLast={statusCodeIndex === Object.values(statusCodes).length - 1}
          />
        </Box>
        <Box className="pl-16 w-2/5">
          <StatusCodeDetailTypography
            statusCodeId={(singularPokemonStatusDetail.status_code_id || statusCodeId).toString()}
            statusCodeTitle={singularPokemonStatusDetail.title || statusCodeTitle}
          />
        </Box>
      </Box>
    </>
  );
}

export default StatusCodeDetail;
