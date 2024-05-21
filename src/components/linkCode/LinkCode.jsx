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
    <Box className="flex flex-col items-center pb-10">

        <Typography className='pt-10 first:mr-96'> 
        How to use, replace [code] with a three digit HTTP response status code number:
        </Typography>

      <Box className="flex justify-center w-3/4">

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
      <Box className="relative w-full flex justify-center">
        <Slide direction="down" in={alertOpen} mountOnEnter unmountOnExit timeout={500}>
          <Alert severity="success" className="absolute top-0 transform -translate-x-1/2">
            Text copied to clipboard!
          </Alert>
        </Slide>
      </Box>

    </Box>
  )
}

export default LinkCode