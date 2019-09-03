import React from "react";
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
      },
      cardGrid: {
        width: '90%',
        paddingTop: theme.spacing(4),
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
      leftIcon: {
        marginRight: theme.spacing(1),
      },
      rightIcon: {
        marginLeft: theme.spacing(1),
      },
      iconSmall: {
        fontSize: 20,
      },
      title: {
      marginTop: theme.spacing(4),
    },
  }));

function Products() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <MainHeader />
            <Container maxWidth="md" className={classes.title}>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                  Products
                </Typography>
            </Container>

            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Grid item key={1} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                GitHub
                            </Typography>
                            <Typography>
                                GitHubアカウント．制作したものがいくつかあります．
                            </Typography>
                            </CardContent>
                            <CardActions>
                            
                            <Fab variant="extended" size="medium" color="default" aria-label="add" className={classes.rightIcon} href="https://github.com/yagijin" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare}  size="lg" className={classes.leftIcon}/>
                            GitHub
                            </Fab>
                            </CardActions>
                        </Card>
                        </Grid>

                        <Grid item key={2} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Twitter
                            </Typography>
                            <Typography>
                                Twitterアカウント．たまにしかつぶやきません．
                            </Typography>
                            </CardContent>
                            <CardActions>
                            
                            <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.rightIcon} href="https://twitter.com/yagijinjin" target="_blank">
                            <FontAwesomeIcon icon={faTwitterSquare}  size="lg" className={classes.leftIcon}/>
                            Twitter
                            </Fab>
                            </CardActions>
                        </Card>
                        </Grid>

                        <Grid item key={3} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Magic
                            </Typography>
                            <Typography>
                                主にスライハンドを練習. 現在は，ギミック作りに没頭中
                            </Typography>
                            </CardContent>
                            <CardActions>
                        
                            <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.rightIcon} href="https://www.instagram.com/yagijin_magic/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram}  size="lg" className={classes.leftIcon}/>
                            Instagram
                            </Fab>
                            </CardActions>
                        </Card>          
                        </Grid>

                        <Grid item key={4} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Boardgame
                            </Typography>
                            <Typography>
                                なんでもやります．<br />
                                カタン日本選手権2019地区予選敗退.
                            </Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                        </Grid>

                        <Grid item key={5} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Travel
                            </Typography>
                            <Typography>
                                海外旅行が好きです．アイスランドにいつか行くことが夢.
                            </Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                        </Grid>

                        <Grid item key={6} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Ramen
                            </Typography>
                            <Typography>
                                究極の煮干しラーメンを作るべく日々奮闘中．
                                いつか寸胴を買ったら豚骨もやりたい．
                            </Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                        </Grid>
                    </Grid>
                </Container>
            <MainFooter />
        </React.Fragment>
    );
}

export default Products;