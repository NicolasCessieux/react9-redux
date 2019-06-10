import React, { Component } from 'react';
import './App.css';
import NavBarContainer from './NavBarContainer';
import LightContainer from './LightContainer';
import CounterContainer from './CounterContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBarContainer />
        <LightContainer />
        <CounterContainer />
      </div>
    );
  }
}
 
export default App;
