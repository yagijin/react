import React, { Fragment } from 'react';
import MainHeader from './components/MainHeader.js';
import ShowMap from './components/ShowMap.js';
import './App.css';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <Container maxWidth="lg">
        <MainHeader />
        <GridList cellHeight={300} className={classes.gridList} cols={6}>
          <GridListTile cols={6}>
            <ShowMap />
          </GridListTile>
          <GridListTile cols={6}>
            <ShowMap />
          </GridListTile>
        </GridList>
        <ShowMap />
      </Container>
    </Fragment>
  );
}
