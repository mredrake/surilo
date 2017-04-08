import React from "react";
import {connect} from 'react-redux';
import store from '../index'
import {PlaylistTrack, Track} from "../components/Track";


class TrackContainer extends React.Component {
    add_to_playlist() {
        store.dispatch({
            type: 'ADD',
            track: this.props.track
        })
    }

    play() {
        store.dispatch({
            type: 'PLAY',
            track: this.props.track
        })
    }

    render() {
        return <Track track={this.props.track} play={this.play.bind(this)} add_to_playlist={this.add_to_playlist.bind(this)}/>
    }
}

class PlaylistTrackContainer extends React.Component {
    render() {
        return <PlaylistTrack track={this.props.track}/>
    }
}

const mapStateToProps = function (store) {
    return {
        tracks: store.tracks
    }
}

connect(mapStateToProps)(Track)

export {TrackContainer, PlaylistTrackContainer}