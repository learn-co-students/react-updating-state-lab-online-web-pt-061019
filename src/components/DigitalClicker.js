// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
  super();

  // Define the initial state:
  this.state = {
      timesClicked: 0
    };
  }

  eventClick = () => {
      this.setState(previousState => {
        return {
          timesClicked: previousState.timesClicked + 1
        }
      })
    }

  // handleClick = () => {
  //     this.setState(previousState => {
  //       return {
  //         count: previousState.count + 1
  //       }
  //     })
  //   }

  render() {
    return (
      <button onClick={this.eventClick}>{this.state.timesClicked}</button>
    )
  }
}
