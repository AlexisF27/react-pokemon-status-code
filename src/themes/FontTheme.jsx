import { createTheme } from '@mui/material/styles';

// Create and export the theme
const fondTheme = createTheme({
  typography: {
    fontFamily: [
      '"Georgia"',
      'sans-serif',
    ].join(','),
  },
});

export default fondTheme;