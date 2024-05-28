import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar'
import StatusCodeDetail from './components/statusCodeDetail/StatusCodeDetail';
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
          <Route path="/:statusCodeId" element={<StatusCodeDetail  />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
