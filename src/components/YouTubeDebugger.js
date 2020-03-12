import React, { Component } from "react";

export default class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: "1080p"
                }
            }
        }
    }

    alterBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    alterResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: "720p"
                }
            }
        });
    }

    render() {
        return(
            <div>
            <button className="bitrate" onClick={this.alterBitrate}>Bitrate: {this.state.settings.bitrate}</button>
            <button className="resolution" onClick={this.alterResolution}>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
        
    }
}
