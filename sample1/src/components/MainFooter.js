import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © Jin Yagi '}
        {new Date().getFullYear()}
        {' - All Rights Reserved. '}
      </Typography>
    );
}

export default function MainFooter() {
    const classes = useStyles();
  
    return (
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            <Link to="/privacypolicy">
              <a><font size="3">Privacy Policy</font></a>
            </Link>
          </Typography>
          <Copyright />
        </footer>
    );
  }
