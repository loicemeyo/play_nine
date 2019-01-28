import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header';
import PlayArea from './Components/PlayArea';
import Stars  from './Containers/Stars';

class App extends Component {
  state = {
    count: 5
  };
  decrement = () => {
    this.setState(state => ({
      count: this.state.count - 1
    }));
  };

  displayYouLose = () => {
    const count = this.state.count;
    if (count === 0) {
      return (
        <div className="win">
          <h2>You Lose</h2>
        </div>
      );
    }
  };

  componentDidUpdate = (prevState) => {
    if(this.state.count !== prevState.count){
      {Stars()}

    }
  }
  render() {
    return (
      <div>
        <Header count={this.state.count} displayYouLose={this.displayYouLose}/>
        <PlayArea
          decrement={this.decrement}
          
        />
      </div>
    );
  }
}

export default App;
