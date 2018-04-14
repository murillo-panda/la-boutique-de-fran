import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './App';
import Products from './components/Products';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/products" component={Products}/>
    </div>
    </Router>
)
export default Routes