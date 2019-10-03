import React , { useState }from 'react';
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

function ButtonPressed(prop){
  console.trace({prop})
  if(prop.buttonState){
    return (
      <img src={logo} className="App-logo" alt="logo" />
    );
  }else{
    return (
      <p>
          This is a sample of using rest API.
        </p>
    );
  }
}

function App() {

  const [buttonState, setButtonState] = useState(true);
  const classes = useStyles();

  function hoge() {
    setButtonState(!buttonState)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ButtonPressed buttonState = {buttonState}/>
        <Button variant="contained" onClick={hoge}>
          登録
        </Button>
      </header>
    </div>
  );
}

export default App;