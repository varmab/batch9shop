import React from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './Shop'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Batch 9 Shop</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route path="/items/:id" component={ItemDetail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
