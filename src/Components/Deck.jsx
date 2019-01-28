import React, { Component } from 'react';
import Button from '../Components/Button';

export default class Deck extends Component {
  state = {
    gray: true
  }

  changeStatus = (e) => {
    this.setState({gray: !this.state.gray})

  }
  render() {
    return (
      <div className="deck">
        <Button class="round-button" newClass="round-button button-green" number="1"/>
        <Button class="round-button" newClass="round-button button-green" number="2"/>
        <Button class="round-button" newClass="round-button button-green" number="3"/>
        <Button class="round-button" newClass="round-button button-green" number="4"/>
        <Button class="round-button" newClass="round-button button-green" number="5"/>
        <Button class="round-button" newClass="round-button button-green" number="6"/>
        <Button class="round-button" newClass="round-button button-green" number="7"/>
        <Button class="round-button" newClass="round-button button-green" number="8"/>
        <Button class="round-button" newClass="round-button button-green" number="9"/>

        
      </div>
    )
  }
}
