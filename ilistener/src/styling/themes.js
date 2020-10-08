import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
            light: blue[50],
            dark: blue[900],
        },
    }
})