import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Feed from '../components/feed';
import '../App.css';
import PostCreation from '../components/postCreation';

export default function HomePage(props) {
    return (
        <div className={"home-page"}>
            <div style={{padding: '2em'}}>
                Write a post...
            </div>
            <Feed posts={[1, 2]}/>
        </div>
    )
}