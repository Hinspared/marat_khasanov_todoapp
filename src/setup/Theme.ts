import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Montserrat, sans-serif',
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        input: {
          paddingBottom: '0.1rem',
          '&::placeholder': {
            color: 'black',
            opacity: '1',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0096FF',
    },
    secondary: {
      main: '#2C3639',
    },
  },
});

export default theme;
