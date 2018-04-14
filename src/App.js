import React, { Component } from 'react';
import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Login />
        </div>
      </div>
      
    );
  }
}

export default App;
