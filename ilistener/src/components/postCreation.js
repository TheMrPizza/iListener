import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { mainTheme } from '../styling/themes';

const useStyles = makeStyles((theme) => ({
    root:{
        direction: 'rtl',
    },
    title: {
        display: 'flex',
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        fontSize: 12,
        height: '90%',
    },
    contentText: {
        height: '100%',
    },
}))

export default function PostCreation(props) {
    const [titleText, setTitleText] = useState();
    const [content, setContent] = useState();
    const classes = useStyles();

    return (
        <ThemeProvider theme={mainTheme} >
            <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    <TextField 
                        value={titleText} 
                        onChange={(event) => setTitleText(event.target.value)} 
                        defaultValue="כותרת"
                        variant="outlined"
                        fullWidth
                    />
                </Typography>
                <Typography className={classes.content}>
                    <TextField
                        className={classes.contentText} 
                        value={content} 
                        onChange={(event) => setContent(event.target.value)} 
                        defaultValue="טקסט" 
                        variant="outlined"
                        fullWidth
                    />
                </Typography>
            </CardContent>
            <CardActions>
                {(titleText && content) && (
                    <Button size="small" onClick={props.submitPost}>העלה פוסט</Button>
                )}
            </CardActions>
            </Card>
        </ThemeProvider>
  );
}
