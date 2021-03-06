import React, {Component} from 'react';
import {connect} from 'react-redux';

import Track from '../components/Track';
import {playAndAdd, addToPlaylist} from '../actions';

class TrackListContainer extends Component {
    renderTracks() {
        return this.props.tracks.map((track) => {
            return <Track key={track.id} track={track} play={this.props.play} addToPlaylist={this.props.addToPlaylist}/>;
        });
    }

    render() {
        return (
            <div className='top-tracks'>
                <h1>Top Tracks</h1>
                <div className='card'>
                    { this.renderTracks() }
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToPlaylist(track, key = null) {
            console.log(key);
            dispatch(addToPlaylist(track));
        },
        play(track, key = null) {
            dispatch(playAndAdd(track));
        }
    };
}

function mapStateToProps(state) {
    return {tracks: state.tracks};
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackListContainer);
