import React, { Component } from 'react';
import '../Header.css';

export default class Chances extends Component {

  render() {
    return (
      <div className="chances">
        <h2>Chances:{this.props.count} </h2>
      </div>
    );
  }
}
