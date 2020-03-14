import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
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

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    // Deeply merging
    // ...this.state.settings returns all the keys and values from within that object.
    handleResClick = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    resolution: '720p'
                }
            }
        })
    }
    
    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrateClick}>Bitrate</button>
                <button className='resolution' onClick={this.handleResClick}>Resolution</button>
            </div>
        )
    }
}
