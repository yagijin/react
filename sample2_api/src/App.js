import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//stateを追加する

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a sample of using rest API.
        </p>
        <Button variant="contained">
          Press Here
        </Button>
      </header>
    </div>
  );
}

export default App;
