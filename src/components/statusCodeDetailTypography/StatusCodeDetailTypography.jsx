import { Box, Link, Typography } from '@mui/material';

import LinkCodeStatusCode from '../linkCodeStatusCode/LinkCodeStatusCode';
import PropTypes from 'prop-types';

function StatusCodeDetailTypography({ statusCodeId, statusCodeTitle }) {
  return (
    <>
      <Box className="flex flex-col items-center">
        <Box className="text-9xl font-bold">{statusCodeId}</Box>
        <Box className="text-5xl pb-4">{statusCodeTitle}</Box>

        <Box className="mt-4">
          <Typography>
            Learn More:{' '}
            <Link href={`https://http.dev/${statusCodeId}`}>
              {statusCodeId} - {statusCodeTitle}{' '}
            </Link>
          </Typography>
        </Box>

        <LinkCodeStatusCode
          statusCodeId={statusCodeId}
          linkTo="the image:"
        />
        <LinkCodeStatusCode
          statusCodeId={statusCodeId}
          extensionString=".jpg"
          linkTo="this page:"
        />
        <LinkCodeStatusCode
          statusCodeId={statusCodeId}
          extensionString=".json"
          linkTo="the Json Response:"
        />
      </Box>
    </>
  );
}

StatusCodeDetailTypography.propTypes = {
  statusCodeId: PropTypes.string,
  statusCodeTitle: PropTypes.string,
};

export default StatusCodeDetailTypography;
