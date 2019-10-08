import React , { useState }from 'react';
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


async function getAllData () {
    let resp = await fetch('http://localhost:3030/api/v1/getAll',{
        method:"GET"
    })
    let respJSON = await resp.json();
    return respJSON;
}

function ShowData (prop) {
  console.log(prop.content);

  return <p>aaa</p>
}

function App() {

  const [content, setContent] = useState({});
  //const classes = useStyles();

  function hoge() {
    setContent(getAllData());
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" onClick={hoge}>
          取得
        </Button>
        <ShowData content = {content}/>
      </header>
    </div>
  );
}

export default App;