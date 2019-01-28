import React, { Component, Fragment } from 'react';
import Stars from '../Containers/Stars';
import MidSection from './MidSection';
import Selected from './Selected';
import Deck from './Deck';


export default class PlayArea extends Component {
  render() {
    console.log('1111111111111',this.props)
    return (
      <Fragment>
        <div className="playArea">
          <Stars/>
          <MidSection decrementfunc={this.props.decrement} displayYouLose={this.props.displayYouLose}/>
          <Selected />
        </div>
        <div className="deck">
          <Deck />
        </div>
      </Fragment>
    );
  }
}
