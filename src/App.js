import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import intro from './pages/intro';
import create from './pages/create';
import vote from './pages/vote';
import {Component} from "react";

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={intro} />
          <Route path='/create' component={create} />
          <Route path='/vote' component={vote}/>
        </Switch>
    </Router>
  );
}

export default App;
