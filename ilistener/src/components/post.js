import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { mainTheme } from '../styling/themes';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: '0.2em',
        direction: 'rtl',
    },
    title: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        display: 'flex',
        fontSize: 14,
        fontWeight: 'bold',
        textDecoration: 'underline',
        maxWidth: '50%',
    },
    content: {
        fontSize: 12,
    },
    hidden: {
        filter: `blur(4px)`,
        cursor: 'pointer'
    }
}))

const SHOW_OFFENSIVE_CONTENT = 'הצג תוכן פוגעני';
const HIDE_OFFENSIVE_CONTENT = 'החבא תוכן פוגעני';

/*
props: {
    title,
    id,
    isOffensive,
    content,
}
*/

// Todo: fix the content click hidden bug
export default function Post(props) {
    const [isHidden, setIsHidden] = useState(props.isOffensive);
    const classes = useStyles();
    const contentClasses = classNames({[classes.hidden]: isHidden});

  return (
    <ThemeProvider theme={mainTheme} >
        <Card square variant="outlined" className={classes.root}>
        <CardContent className={contentClasses}>
            <Typography className={classes.title} gutterBottom>
                <div className={classes.titleText}>
                    {props.title}
                </div>
            </Typography>
            <Typography className={classes.content} onClick={() => setIsHidden(false)}>
                {props.content}
            </Typography>
        </CardContent>
        <CardActions>
            {props.isOffensive && (
                <Button size="small" onClick={() => {setIsHidden(!isHidden)}}>
                    {isHidden ? SHOW_OFFENSIVE_CONTENT : HIDE_OFFENSIVE_CONTENT}
                </Button>
               )
            }
        </CardActions>
        </Card>
    </ThemeProvider>
  );
}
