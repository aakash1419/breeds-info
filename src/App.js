import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() {
  return(
    <div>
      <Button variant="contained">
        Explore Breeds
      </Button>
    </div>
  );
  
}

export default App;
