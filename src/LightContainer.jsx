import React, { Component } from 'react';
import { connect } from 'react-redux';

class LightComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  
  render() { 
    const { light, dispatch } = this.props;
    return (
      <div>
        <p>{ light }</p>
        <button className='Button' onClick={ () => dispatch({ type: 'SWITCH'}) }>
          Switch
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  light: state.light
});

const LightContainer = connect(mapStateToProps)(LightComponent)

export default LightContainer;
