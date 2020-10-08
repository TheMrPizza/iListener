import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2769b3',
            light: '#229ae9',
            dark: '#1a76e1',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                
            }
        }
    }
})