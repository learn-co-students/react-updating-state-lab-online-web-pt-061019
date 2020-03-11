import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    // Recommended Solution: Pass a function
    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    // Other Solution
    // handleClick = () => {
    //     // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
    //     let newCount = this.state.timesClicked + 1
    //     this.setState({
    //       timesClicked: newCount
    //     })
    //   }
    
    render() {
        return (
            <div>
                {/* <h1>{this.state.timesClicked}</h1> */}
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

