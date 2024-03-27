import './App.css'

import NavBar from './components/navBar/NavBar'
import { ThemeProvider } from '@mui/material/styles';
import Title from './components/title/Title'
import fondTheme from './themes/FontTheme';

function App() {

  return (
    <ThemeProvider theme={fondTheme} >
      <NavBar />
      <Title />
    </ThemeProvider>
  )
}

export default App
