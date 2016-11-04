import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

export default class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { 
      count: {count},
      counter_actions: {increment},
      counter_actions: {decrement}
    } = this.props;

     return (
      <div>
         <Button bsStyle="primary" onClick={increment}>Increment</Button>
         {count}
         <Button bsStyle="danger" onClick={decrement}>Decrement</Button>
      </div>
    );
  }
}
