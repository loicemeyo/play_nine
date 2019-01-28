import React, { Component } from 'react';
import equal from '../Assets/equal.png';
import refresh from '../Assets/refresh.png';
import '../Header.css';

export default class MidSection extends Component {
  render() {
    console.log('22222222', this.props)
    return (
      <div className="control-area-container">
        <div className="control-area">
          <div className="controls">
            <button className="equal">
              <img alt="equal-sign" src={equal} />
            </button>
            <button className="refresh" onClick={this.props.decrementfunc}>
              <img alt="refresh-sign" src={refresh} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
