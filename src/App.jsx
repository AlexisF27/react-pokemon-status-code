import './App.css'

import NavBar from './components/NavBar'
import { ThemeProvider } from '@mui/material/styles';
import fondTheme from './themes/FontTheme';

function App() {

  return (
    <ThemeProvider theme={fondTheme} >
      <NavBar/>



    </ThemeProvider>
  )
}

export default App
