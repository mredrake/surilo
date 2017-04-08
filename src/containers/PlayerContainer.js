import React from "react";
import {connect} from 'react-redux'
import YouTube from "react-youtube"

export class Player extends React.Component {
    render() {
        const opts = {
            height: '260',
            width: '475',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        if (this.props.now_playing && this.props.now_playing.yt) {
            return (
                <YouTube
                    videoId={this.props.now_playing.yt}
                    opts={opts}
                    onReady={this._onReady}
                />
            )
        }else{
            return (
                <YouTube
                    videoId={null}
                    opts={opts}
                    onReady={this._onReady}
                />
            )
        }
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}


function mapStateToProps(state) {
    return (
        {
            now_playing: state.now_playing
        }
    )
}

export default connect(mapStateToProps)(Player)