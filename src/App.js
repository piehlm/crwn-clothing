import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <HomePage />
      </div>
    );
  }
}

export default App;
