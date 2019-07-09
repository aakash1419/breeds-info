import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import BreedListComponent from './breeds-source/index';

export class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Button variant="contained">
            <Link to = {'/'}>Explore Breeds</Link>
          </Button>
          <div>
            <Switch>
              <Route path='/' exact component={BreedListComponent}></Route>
            </Switch>
          </div>
      </div>
      </BrowserRouter>
    );
  }
  
}


