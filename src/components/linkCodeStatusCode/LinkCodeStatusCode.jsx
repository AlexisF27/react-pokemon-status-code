import { Alert, Box, IconButton, Slide, Typography } from '@mui/material';
import { useRef, useState } from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PropTypes from 'prop-types';

function LinkCodeStatusCode({ statusCodeId, extensionString, linkTo }) {
  const textRef = useRef(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const handleCopyClick = () => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setAlertOpen(true);
        setTimeout(() => setAlertOpen(false), 2000); // Hide alert after 3 seconds
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <>
      <Box className="relative w-full flex justify-center">
        <Slide
          direction="down"
          in={alertOpen}
          mountOnEnter
          unmountOnExit
          timeout={500}>
          <Alert
            severity="success"
            className="absolute transform -translate-x-1/4">
            Text copied to clipboard!
          </Alert>
        </Slide>
      </Box>
      <Box className="pt-8">
        <Typography>Link to {linkTo}</Typography>

        <Box className="flex mt-2 p-8 w-[70rem] border-solid border-2 border-stone-400 bg-slate-900">
          <Typography
            className="text-white break-words w-full"
            ref={textRef}>
            https://http.pokemon/{statusCodeId}
            {extensionString}
            ijafeiojfoijeoisjfowijfoiejoifjfwekjfiopejkfoiejsfoijseoifjesoifjesoivwevewfiewjfoijwefoiwejfiosfsdfewfewfewfewfewewjfiowjfioewjfiowjefiojweifj
          </Typography>
          <IconButton
            onClick={handleCopyClick}
            className="m-2">
            <ContentCopyIcon className="text-white mr-16" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

LinkCodeStatusCode.propTypes = {
  statusCodeId: PropTypes.string.isRequired,
  extensionString: PropTypes.string,
  linkTo: PropTypes.string,
};

export default LinkCodeStatusCode;
