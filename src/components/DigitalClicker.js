// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }
  //counter with call back func
  // handleClick = () => {
  //   let newCount = this.state.timesClicked + 1
  //   this.setState({
  //     timesClicked: newCount
  //   }, () => console.log(this.state.timesClicked))
  // }

  //counter with previousState
  // handleClick = () => {
  //   this.setState(previousState => {
  //     return {
  //       timesClicked: previousState.timesClicked + 1
  //     }
  //   })
  //   console.log(this.state.timesClicked)
  // }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked+1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
