import './App.css'

import LinkCode from './components/linkCode/LinkCode'
import NavBar from './components/navBar/NavBar'
import SearchBar from './components/searchBar/SearchBar'
import { ThemeProvider } from '@mui/material/styles';
import Title from './components/title/Title'
import fondTheme from './themes/FontTheme';

function App() {

  return (
    <ThemeProvider theme={fondTheme} >
      <NavBar />
      <Title />
      <SearchBar />
      <LinkCode/>
    </ThemeProvider>
  )
}

export default App
