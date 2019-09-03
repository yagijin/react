import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

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


function NotFound() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <MainHeader />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="lg">
                    <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                        Page Not Found
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        You can use the tab at the upper left to go to any page you want.
                    </Typography>
                    </Container>
                </div>
            </main>
            <MainFooter />
        </React.Fragment>
    );
}

export default NotFound;