import React, { Component } from 'react'
import Title from './Title';
import YouLose from './YouLose';
import Chances from './Chances';

 class Header extends Component {
  render() {
    console.log(this.props);
    return (
    <div>
      <div className="header">
        <Title />
        <YouLose displayYouLose={this.props.displayYouLose}/>
        <Chances count={this.props.count}/>
    </div>
    < hr/>
    </div>
      
    )
  }
}
export default Header;
