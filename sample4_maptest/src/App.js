import React, { Fragment } from 'react';
import MainHeader from './components/MainHeader.js';
import ShowMap from './components/ShowMap.js';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function App() {
  
  return (
    <Fragment>
      <Container maxWidth="md">
        <MainHeader />
        <ShowMap />
      </Container>
    </Fragment>
  );
}
