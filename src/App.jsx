import './App.css';

import { Navigate, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';

import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import PropTypes from 'prop-types';
import StatusCodeDetail from './components/statusCodeDetail/StatusCodeDetail';
import { ThemeProvider } from '@mui/material/styles';
import fondTheme from './themes/FontTheme';
import statusCodes from './assets/data/status_code_pokemon.json';

function App() {
  const [inputSearch, setInputSearch] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validStatusCodes = useMemo(
    () => Object.values(statusCodes).map((statusCode) => statusCode.status_code_id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [statusCodes]
  );

  const isValidStatusCode = (id) => {
    return validStatusCodes.includes(+id);
  };

  return (
    <ThemeProvider theme={fondTheme}>
      <Router>
        <NavBar
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
        />
        <Routes>
          <Route
            path="/"
            element={<Home inputSearch={inputSearch} />}
          />
          <Route
            path="/:statusCodeId"
            element={<StatusCodeRouteGuard isValidStatusCode={isValidStatusCode} />}
          />
          <Route
            path="*"
            element={
              <Navigate
                to="/404"
                replace
              />
            }
          />{' '}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const StatusCodeRouteGuard = ({ isValidStatusCode }) => {
  const { statusCodeId } = useParams();
  return isValidStatusCode(statusCodeId) ? (
    <StatusCodeDetail />
  ) : (
    <Navigate
      to="/404"
      replace
    />
  );
};

StatusCodeRouteGuard.propTypes = {
  isValidStatusCode: PropTypes.func,
};

export default App;
