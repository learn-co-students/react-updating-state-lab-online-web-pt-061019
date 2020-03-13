// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }

    }
  }
 
  handleClickBitRate = (e) => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    }, console.log(this.state))
  }

  handClickRes = (e) => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, console.log(this.state))
  }
 
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleClickBitRate}>bitrate: {this.state.settings.bitrate}</button>
        <button className ='resolution' onClick={this.handClickRes}>resolution: {this.state.settings.video.resolution}  </button>
      </div>
    )
  }
}
