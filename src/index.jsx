import React, { Component } from 'react';
import { render } from 'react-dom';

class Test extends Component{
  render(){
    return (
      <h1>HEY CODERS</h1>
    )
  }
}

render(
  <Test/>
  , document.getElementById('app')
);
