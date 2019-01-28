import React, { Component } from 'react';

export default class Button extends Component {
    state = {
        gray: true,
        isButtonDisabled: false
    }

    changeColor= () => {
        this.setState({ gray: !this.state.gray, isButtonDisabled: !this.state.isButtonDisabled})
    }
    render(){
        let btnClass = this.state.gray ? this.props.class : this.props.newClass
        return(
            <div>
                <button className={btnClass} onClick={this.changeColor.bind(this)} disabled={this.state.isButtonDisabled}>{this.props.number}</button>
            </div>

        )
        }
    }
