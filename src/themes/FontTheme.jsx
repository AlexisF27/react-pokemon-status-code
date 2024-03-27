import { createTheme } from '@mui/material/styles';

// Create and export the theme
const fondTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default fondTheme;