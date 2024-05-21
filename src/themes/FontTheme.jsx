import { createTheme } from '@mui/material/styles';

// Create and export the theme
const fondTheme = createTheme({
  typography: {
    fontFamily: [
      'Courier New',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default fondTheme;