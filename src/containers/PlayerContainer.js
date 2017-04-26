import React, {Component} from 'react';
import {connect} from 'react-redux';
import YouTube from 'react-youtube';
import Sound from 'react-sound';
import {Mp3Player} from "../components/Mp3Player";

export class PlayerContainer extends Component {
    render() {
        const opts = {
            height: '260',
            width: '475',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        if (this.props.now_playing) {
            if (this.props.now_playing.has_mp3) {
                // return (
                //     <audio controls autoPlay>
                //         <source src={this.props.now_playing.mp3} type="audio/mpeg"/>
                //         Please upgrade to a newer browser.
                //     </audio>
                //
                // );
                // return <Sound url={this.props.now_playing.mp3} playStatus="PLAYING"/>;
                return <Mp3Player trackId={this.props.now_playing.id}/>
            }
            else if (this.props.now_playing.yt) {
                return (
                    <YouTube
                        videoId={this.props.now_playing.yt}
                        opts={opts}
                        onReady={this._onReady}
                    />
                );
            }
        }
        return null;
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
    );
}

export default connect(mapStateToProps)(PlayerContainer);
