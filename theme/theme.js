import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#6b63b5',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#10151b',
    },
  },
});

export default theme;
