import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { light } = this.props;
    return (
        <div className='NavBar'>
          <p>
            { light }
          </p>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  light: state.light
});

const NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer;
