import React, { Component } from 'react';
import '../Header.css';

export default class YouLose extends Component {
  render() {
    return(
      <div>{this.props.displayYouLose()}</div>
    )
  }
}
