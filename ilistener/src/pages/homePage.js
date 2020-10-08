import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Feed from '../components/feed';
import '../App.css';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: theme.palette.primary.main,
//         '&:hover': {
//             backgroundColor: theme.palette.primary.dark
//         },

//     },
// }))

//Todo: Remove later
const tempMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const tempTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

export default function HomePage(props) {
    // const classes = useStyles();

    // <ThemeProvider theme={mainTheme} >
    //     <Button classes={{...classes}}>
    //         Hello world...
    //     </Button>
    // </ThemeProvider>

    return (
        <div className={"home-page"}>
            <div style={{padding: '2em'}}>
                Write a post...
            </div>
            <Feed posts={[1, 2]}/>
        </div>
    )
}