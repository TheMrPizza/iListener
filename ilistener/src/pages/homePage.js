import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Feed from '../components/feed';
import '../App.css';

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
        <div className={"home-page"}>
            <div style={{padding: '2em'}}>
                Write a post...
            </div>
            <Feed posts={[1, 2]}/>
        </div>
    )
}