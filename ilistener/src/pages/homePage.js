import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { mainTheme } from '../styling/themes';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark
        },
        '&:active': {
            backgroundColor: theme.palette.primary.light
        }

    },
}))

export default function HomePage(props) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={mainTheme} >
            <Button classes={{
                root: classes.root,
                hover: classes.hover,
                pressed: classes.pressed,
            }}>
                Hello world...
            </Button>
        </ThemeProvider>
    )
}