import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));


export default function Welcome() {
  const classes = useStyles();

  return (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );
}