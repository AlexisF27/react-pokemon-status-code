import './navBar.css';
import '@fontsource/roboto';

import {Box, Typography} from '@mui/material';

function NavBar() {
  return (
    <header id="header">
      <Box className="box-img-title">
        <img
          id="img-logo"
          className="brightness"
          src="https://private-user-images.githubusercontent.com/31175897/317092322-3d907c95-f92f-4b30-aee5-fa89be818cdf.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE1MDM4NjcsIm5iZiI6MTcxMTUwMzU2NywicGF0aCI6Ii8zMTE3NTg5Ny8zMTcwOTIzMjItM2Q5MDdjOTUtZjkyZi00YjMwLWFlZTUtZmE4OWJlODE4Y2RmLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzI3VDAxMzkyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU5ZWNmNDVmZjczYzk0NDQ2ZDVmNzAwNGE3ZmIwZTljYmY5OWZmYTc2ZmRjYzJlZGUzMTg2NWYzYmQ1MjVmZTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.okylny2TX91wvJMjfdEsbAn56JxtZE17hBxOrjreYEs"
          alt="logo"
        ></img>
        <Typography variant="h1" style={{ fontFamily: 'Roboto' }} className="roboto-font underline-color">HTTP POKEMON</Typography>
      </Box>
    </header>
  );
}

export default NavBar;
