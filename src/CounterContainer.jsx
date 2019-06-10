import React, { Component } from 'react';
import { connect } from 'react-redux';

class CountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  
  render() { 
    const { counter, dispatch } = this.props;
    return (
      <div>
        <p>{ counter }</p>

        <p id="render-store"></p>
        <button className='Button' onClick={() => dispatch({ type: 'ADD1'})} type="button" >
          +
        </button>
        <button className='Button' onClick={() => dispatch({ type: 'REMOVE1'})} type="button" >
          -
        </button>
        <button className='Button' onClick={() => dispatch({ type: 'ADD10'})} type="button" >
          + 10
        </button>
        <button className='Button' onClick={() => dispatch({ type: 'REMOVE10'})} type="button" >
          - 10
        </button>
        <button className='Button' onClick={() => dispatch({ type: 'RESET'})} type="button" >
          reset
        </button>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const CountContainer = connect(mapStateToProps)(CountComponent)

export default CountContainer;
