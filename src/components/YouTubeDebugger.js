// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export class YouTubeDebugger extends Component {
  constructor() {
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

  handleResolution = () => {
    this.setState(previousState => ({
      settings: {
        ...previousState.settings,
        video: {
          ...previousState.settings.video,
          resolution: '720p'
        }
      }
    }), () => console.log(this.state))
  }

  handleBitrate = () => {
    this.setState(previousState => ({
      settings: {
        ...previousState.settings,
        bitrate: 12
      }
    }), () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
