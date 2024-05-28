import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar'
import { ThemeProvider } from '@mui/material/styles';
import fondTheme from './themes/FontTheme';
import { useState } from 'react';

function App() {

  const [inputSearch, setInputSearch] = useState('');


  return (
    <ThemeProvider theme={fondTheme} >
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home inputSearch={inputSearch} setInputSearch={setInputSearch} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
