import { Alert, Box, IconButton, Slide, Typography } from '@mui/material';
import { useRef, useState } from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function LinkCode() {
  const textRef = useRef(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const handleCopyClick = () => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setAlertOpen(true);
      setTimeout(() => setAlertOpen(false), 2000); // Hide alert after 3 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <Box className="flex flex-col items-center">


      <Box className="flex justify-center pt-10 w-3/4">

        <Box
          className="flex justify-between items-center p-2 w-3/4 border-solid border-2 border-stone-400 bg-slate-900"
        >
          <Typography
            className="text-white mb-4"
            ref={textRef}
          >
            https://http.dog/[code].jpg

          </Typography>
          <IconButton onClick={handleCopyClick} >
            <ContentCopyIcon className="text-white" />
          </IconButton>
        </Box>
      </Box>

      {alertOpen && (
        <Slide  in={alertOpen}  mountOnEnter unmountOnExit timeout={1000}>
          <Alert className='flex justify-center w-1/4' severity="success">This is a success Alert.</Alert>

        </Slide>
      )}
    </Box>
  )
}

export default LinkCode