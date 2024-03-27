import './App.css'

import { Box, Typography } from '@mui/material';

import NavBar from './components/NavBar'
import { ThemeProvider } from '@mui/material/styles';
import fondTheme from './themes/FontTheme';

function App() {

  return (
    <ThemeProvider theme={fondTheme} >
      <NavBar/>
      <Typography variant="h5" style={{ fontFamily: 'Roboto' }} className="roboto-font normal-weight description">Dogs for every HyperText Transfer Protocol response status code.</Typography>




    </ThemeProvider>
  )
}

export default App
