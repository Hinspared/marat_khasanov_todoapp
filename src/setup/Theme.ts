import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        input: {
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
